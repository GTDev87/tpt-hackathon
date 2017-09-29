import os  
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

version = 2

image_file_location = '/images'

def make_predictions(image_file):
    model = SqueezeNet()
    img = image.load_img(image_file, target_size=(227, 227))
    x = image.img_to_array(img)
    img.close()
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)
    preds = model.predict(x)

    return decode_predictions(preds)

def process_filename(db, filename):
    filename_parts = filename.split('_')
    if filename_parts[0] != 'analyze':
        return

    product_id = filename_parts[-1].replace('.jpg', '')
    term = ' '.join(filename_parts[1:-1])
    print ("product_id = " + product_id)
    print ("term = " + term)
    
    predictions = make_predictions(image_file_location + '/' + filename)
    predictions_processed = {}
    for prediction in predictions[0]:
        predictions_processed[prediction[1]] = float(prediction[2])
    data_for_db = {
        'id': product_id,
        'thumbnails': [predictions_processed],
        'version': version
    }
    print (data_for_db)
    db.child("products").push(data_for_db)

if __name__ == '__main__':
    config = {
      "apiKey": "AIzaSyCLb6XCoyyxmaBcRcGZS95PbPmDv00x-1w",
      "authDomain": "hotdog-b8844.firebaseapp.com",
      "databaseURL": "https://hotdog-b8844.firebaseio.com",
      "storageBucket": "hotdog-b8844.appspot.com"
    }
    firebase = pyrebase.initialize_app(config)
    db = firebase.database()


    for filename in os.listdir(image_file_location):
        process_filename(db, filename)

