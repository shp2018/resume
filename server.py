from flask import Flask, escape, request, render_template

app = Flask(__name__, static_url_path='')

@app.route('/')
def hello():
    return render_template('index.html')
app.run()