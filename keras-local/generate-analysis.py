import csv
import requests
import json
import numpy as np
from keras_squeezenet import SqueezeNet
from keras.applications.imagenet_utils import preprocess_input, decode_predictions
from keras.preprocessing import image
import urllib
import sys
import pyrebase

"""

Download a thumbnail image for TPT products, classify them using SqueezeNet,
and upload the results to Firebase.

"""


def get_product_preview_image(product_id):
    response = requests.post(
        'https://www.teacherspayteachers.com/graph/graphql',
        data={
            'query': 'query { products(ids:[%s]) { images { large } } }' % product_id
        }
    )
    json_data = json.loads(response.text)
    return json_data['data']['products'][0]['images'][0]['large']

def make_predictions(image_file):
    model = SqueezeNet()
    img = image.load_img(image_file, target_size=(227, 227))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)
    preds = model.predict(x)
    return decode_predictions(preds)

if __name__ == '__main__':
    config = {
      "apiKey": "AIzaSyCLb6XCoyyxmaBcRcGZS95PbPmDv00x-1w",
      "authDomain": "hotdog-b8844.firebaseapp.com",
      "databaseURL": "https://hotdog-b8844.firebaseio.com",
      "storageBucket": "hotdog-b8844.appspot.com"
    }
    firebase = pyrebase.initialize_app(config)
    db = firebase.database()

    with open('hot-dogs.csv', 'rb') as csvfile:
        reader = csv.reader(csvfile, delimiter=' ', quotechar='|')
        for line in reader:
            product_id = line[0]
            image_url = get_product_preview_image(product_id)
            urllib.urlretrieve(image_url, './analyze.jpg')
            predictions = make_predictions('./analyze.jpg')
            predictions_processed = {}
            for prediction in predictions[0]:
                predictions_processed[prediction[1]] = float(prediction[2])
            data_for_db = {
                'id': product_id,
                'thumb_urls': [image_url],
                'thumbnails': [predictions_processed]
            }
            db.child("products").push(data_for_db)

