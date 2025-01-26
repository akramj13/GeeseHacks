import os
from openai import OpenAI
from io import BytesIO
from dotenv import load_dotenv

load_dotenv()

# Get API key
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

def get_experience_level(user_input):

    client = OpenAI(api_key=OPENAI_API_KEY)
    response = client.chat.completions.create(
    model="gpt-4",  # or another model
    messages=[
        {"role": "system", "content": 
         """"You are an investment expert. Your ONLY task is to classify a user's investment knowledge into exactly ONE of three levels: 'beginner', 'intermediate', or 'advanced'. 
         You are to base your classification off the users input to the following questions: 
         How much do you know about investing? (Text field) -> Process with AI to return beginner, intermediate, advanced
         What stocks have you heard about?
         How long do you plan to continue to invest your money?
         How familiar are you with the stock market?
         Are you looking for growth, income, or capital preservation?
         What is your investment budget?
         Are you looking to earn dividends on your investments?
        
        Criteria:
        Beginner:
        Little to no experience with investing.
        Limited knowledge of stock market concepts.
        Short-term focus with small budgets and uncertainty in financial goals.
        Unfamiliarity with diversification and risk management.
        Intermediate:
        Some investing experience, aware of basic market terms.
        Has a clear investment goal (growth, income, or preservation).
        Familiar with common stocks and willing to invest a moderate amount.
        Aware of risk but not highly skilled in portfolio management.
        Advanced:
        Deep understanding of investing strategies and financial markets.
        Long-term planning with large budgets.
        Knowledge of financial metrics, risk management, and diversification strategies.
        Actively follows and adjusts investments based on market conditions.
        
        Respond ONLY with: beginner, intermediate, or advanced
        """},
        {"role": "user", "content": user_input}
    ],
    max_tokens=10  
    )
    
    # Extract and return the classification
    classification = response.choices[0].message.content.lower().strip()
    
    return classification if classification in ['beginner', 'intermediate', 'advanced'] else 'beginner'

#result = get_experience_level('I know everything about investing')
#print(result)
