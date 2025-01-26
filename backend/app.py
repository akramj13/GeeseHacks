from flask import Flask, request, jsonify
import requests
from flask_cors import CORS
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import datetime as dt
from stock_handler import get_stock_data 
from gpt import get_experience_level
from ticker_extract import get_ticker_name
import os
from dotenv import load_dotenv

load_dotenv()

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

# VoiceFlow API credentials from environment variables
VOICEFLOW_API_KEY = os.getenv("VOICEFLOW_API_KEY")
VOICEFLOW_PROJECT_ID = os.getenv("VOICEFLOW_PROJECT_ID")
VOICEFLOW_URL = f"https://general-runtime.voiceflow.com/state/{VOICEFLOW_PROJECT_ID}/user"

def send_message_to_voiceflow(user_id: str, message: str):
    """
    Sends a message to the VoiceFlow chatbot and retrieves the response.
    
    :param user_id: A unique user identifier
    :param message: The user's message to the chatbot
    :return: Chatbot response as JSON
    """
    try:
        response = requests.post(
            f"{VOICEFLOW_URL}/{user_id}",
            headers={"Authorization": f"Bearer {VOICEFLOW_API_KEY}", "Content-Type": "application/json"},
            json={"type": "text", "payload": message}
        )

        if response.status_code == 200:
            return response.json()  # Return chatbot response
        else:
            return {"error": "VoiceFlow API request failed", "details": response.text}
    except Exception as e:
        return {"error": str(e)}


@app.route('/chat', methods=['POST'])
def chat():
    """
    Flask endpoint to receive user messages and send them to VoiceFlow.
    """
    data = request.get_json()
    print(data)
    user_id = data.get("userId", "default_user")
    message = data.get("message")
    print(user_id)
    print(message)
    print(f"Voiceflow API Key: {VOICEFLOW_API_KEY}")
    print(f"Voiceflow Project ID: {VOICEFLOW_PROJECT_ID}")
    print(f"Voiceflow URL: {VOICEFLOW_URL}")

    if not message:
        return jsonify({"error": "No message provided"}), 400

    chatbot_response = send_message_to_voiceflow(user_id, message)
    return jsonify(chatbot_response)


if __name__ == "__main__":
    app.run(debug=True)
