from flask import Flask
from flask_cors import CORS
import random

quotes2 = [
    "You live and learn. At any rate, you live.",
    "This is another random quote from Earthly",
    "Progress is a nice word. But change is its motivator and change has its enemies.",
    "It's the opinion of some that crops could be grown on the moon. Which raises the fear that it may not be long before we're paying somebody not to.",
    "Perfect as the wing of a bird may be, it will never enable the bird to fly if unsupported by the air. Facts are the air of science. Without them a man of science can never rise.",
]


app = Flask(__name__)
CORS(app)


def quotes():
    qs = []
    with open('quotes.txt', "r") as f:
        for line in f:
            qs.append(line.rstrip()) 
    return qs


def random_quote():
    return random.choice(quotes())

# flask --app src/quote run --host=0.0.0.0 --port=8002
# prod: gunicorn -w 4 'quote:app' -b 0.0.0.0:8002 --chdir src 
@app.route("/")
def quote():
    return random_quote() 





