import os
from openai import OpenAI
from io import BytesIO
from dotenv import load_dotenv

load_dotenv()

# Get API key
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

def get_ticker_name(user_input):
    client = OpenAI(api_key=OPENAI_API_KEY)
    response = client.chat.completions.create(
        model="gpt-4",  # or another model
        messages=[
            {"role": "system", "content": 
            """"You are an investment expert. Your ONLY task is to take the users interested companies and
            return only the ticker symbols of those common stock of those companies
            """},
            {"role": "user", "content": user_input}
        ],
        max_tokens=10  
    )
    
    # Extract and return the ticker symbols
    company_tickers = response.choices[0].message.content.lower().strip()
    company_tickers_array = company_tickers.split(',')
    return company_tickers_array

# result = get_ticker_name('Apple, Amazon, Google')
# print(result)
