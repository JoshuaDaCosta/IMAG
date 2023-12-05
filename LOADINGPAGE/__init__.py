from flask import Flask, render_template,redirect,request,flash
import pyrebase


IMAG= Flask(__name__)
IMAG.config['SECRET_KEY']="IMAGSEGURA"
IMAG.secret_key='IMAGSEGURA'
config={
    "apiKey": "AIzaSyAp_EOqeRaq3iC_Dtp9G4hqIdrq8hG3F0E",
    "authDomain": "imag-v.firebaseapp.com",
    "projectId": "imag-v",
    "storageBucket": "imag-v.appspot.com",
    "messagingSenderId": "424004884593",
    "appId": "1:424004884593:web:3d829541de9a226286a3d0",
    "measurementId": "G-T298S5NJQR",
    "databaseURL":'https://imag-v-default-rtdb.firebaseio.com/'
}
firebase=pyrebase.initialize_app(config)
auth=firebase.auth()
print(config['databaseURL'])
from LOADINGPAGE.controllers import default