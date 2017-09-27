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
A patch script to add TPT product image URLs to Firebase records.
"""

config = {
  "apiKey": "AIzaSyCLb6XCoyyxmaBcRcGZS95PbPmDv00x-1w",
  "authDomain": "hotdog-b8844.firebaseapp.com",
  "databaseURL": "https://hotdog-b8844.firebaseio.com",
  "storageBucket": "hotdog-b8844.appspot.com"
}
firebase = pyrebase.initialize_app(config)
db = firebase.database()

def get_product_preview_image(product_id):
    response = requests.post(
        'https://www.teacherspayteachers.com/graph/graphql',
        data={
            'query': 'query { products(ids:[%s]) { images { large } } }' % product_id
        }
    )
    json_data = json.loads(response.text)
    return json_data['data']['products'][0]['images'][0]['large']


items = db.child("products").get()
for item in items.each():
    firebase_id = item.key()
    if firebase_id == '-KuzefQbxYczQ81PyP51':
        continue
    print firebase_id
    product = item.val()
    url = get_product_preview_image(product['id'])
    product['thumb_urls'] = [url]
    db.child('products').child(firebase_id).update(product)
