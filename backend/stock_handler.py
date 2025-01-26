#%%
import pandas as pd
import yfinance as yf
import datetime as dt
import cufflinks as cf
from plotly.offline import init_notebook_mode, plot, iplot
import plotly.graph_objs as go

init_notebook_mode(connected=True)
cf.go_offline()

def get_stock_data(ticker="SLF.TO", start="2019-01-01", end="2024-12-31"):
    df = yf.download(ticker, start, end)
    df.columns = [col[0] for col in df.columns.values]

    # Calculate percent change
    pct_change = df["Close"].pct_change()

    # Calculate standard deviation of percent change
    pct_change_std = pct_change.std()
    
    # Create candlestick chart
    fig = go.Figure(
        data=[
            go.Candlestick(
                x=df.index,  # Dates from the index
                open=df['Open'],  # Open prices
                high=df['High'],  # High prices
                low=df['Low'],    # Low prices
                close=df['Close'] # Close prices
            )
        ]
    )

    # Update layout
    fig.update_layout(
        xaxis_title='Date',
        yaxis_title='Price',
        xaxis_rangeslider_visible=False
    )

    # fig.show()

    fig2 = go.Figure(data=[go.Histogram(x=pct_change)])

    fig2.update_layout(
        xaxis_title='Close',
        yaxis_title='Count',
        xaxis_rangeslider_visible=False
    )
    # fig2.show()

    response = {
        "pct_change_std": pct_change_std,
        "candle_chart": fig.to_json(),
        "hist_chart": fig2.to_json()
    }

    return response

get_stock_data()
# %%
