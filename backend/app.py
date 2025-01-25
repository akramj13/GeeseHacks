from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
from pandas_datareader import data, wb
import matplotlib.pyplot as plt
import seaborn as sns
import requests
import datetime as dt
from stock_handler import get_stock_data 
# import func from om_gpt

app = Flask(__name__)
CORS(app)

@app.route("/api/stock")
def get_stock():
    ticker = request.params.get("ticker")
    start = request.params.get("start")
    end = request.params.get("end")

    stock_data = get_stock_data(ticker, start, end)
    return jsonify({"percent_change": data["percent_change"], "chart": data["chart"]})

@app.route("/api/gpt")
def get_level():
    data = request.get_json()
    response = data.get("response")
    level = func(response)
    return jsonify({"level": level})


if __name__ == "__main__":
    app.run(debug=True)
