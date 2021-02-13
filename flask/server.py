from flask import Flask,render_template,request
import os

app = Flask(__name__)
VIDEOS_PATH = '/media/narayan/chaser/Dark/S01/E1'

@app.route('/')
def home():
    files = os.listdir(VIDEOS_PATH)
    print(files)
    res_string = ''
    for file in files:
        res_string += f'<a href="/getVideo/{file}">{file}</a><br>'

    return res_string

@app.route('/getVideo/<season>/<episode>')
def get_video(season,episode):
    return render_template('video.html',season=season,episode=episode)


if __name__=='__main__':
    app.run(debug=True,host='0.0.0.0',port=5000)