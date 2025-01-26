from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import datetime as dt
from stock_handler import get_stock_data 
from gpt import get_experience_level
from ticker_extract import get_ticker_name

app = Flask(__name__)
CORS(app)


@app.route("/api/stock")
def get_stock():
    ticker = request.args.get("ticker")
    start = request.args.get("start")
    end = request.args.get("end")
    print("within flask", ticker, start, end)
    # return jsonify({"hi": 231})

    stock_data = get_stock_data(ticker, start, end)
    return jsonify(stock_data)


@app.route("/api/gpt", methods=["POST"])
def get_level():
    data = request.get_json()
    response = data.get("response")
    level = get_experience_level(response)
    return jsonify({"level": level})


@app.route("/api/ticker")
def get_ticker():
    data = request.get_json()
    response = data.get("response")
    level = get_ticker_name(response)
    return jsonify({"level": level})


if __name__ == "__main__":
    app.run(debug=True)
