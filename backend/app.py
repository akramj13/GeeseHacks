from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import datetime as dt
from stock_handler import get_stock_data 
# import func from om_gpt

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

@app.route("/api/gpt")
def get_level():
    data = request.get_json()
    response = data.get("response")
    level = func(response)
    return jsonify({"level": level})


if __name__ == "__main__":
    app.run(debug=True)
