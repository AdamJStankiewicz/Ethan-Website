from flask import *
from flask_socketio import SocketIO, emit
import os, os.path

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/', methods=['GET'])
def main():
    path=os.getcwd()+f'/dist/'
    return send_from_directory(directory=path,path='index.html')

socketio.run(app,host="0.0.0.0",port=1477, allow_unsafe_werkzeug=True, debug=True)