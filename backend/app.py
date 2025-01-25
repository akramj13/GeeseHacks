from flask import Flask
import numpy as np
import pandas as pd
from pandas_datareader import data, wb
import matplotlib.pyplot as plt
import seaborn as sns
import requests
import datetime as dt

app = Flask(__name__)


@app.route("/api/etf")
def get_etfs():
    


if __name__ == "__main__":
    app.run(debug=True)
