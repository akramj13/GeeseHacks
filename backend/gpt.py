from openai import OpenAI
import os
n 
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

def main(user_input):
    client = OpenAI(api_key=OPENAI_API_KEY)
    response = client.chat.completions.create(
    model="gpt-4",  # or another model
    messages=[
        {"role": "system", "content": """"You are an investment expert. Your ONLY task is to classify a user's investment knowledge into exactly ONE of three levels: 'beginner', 'intermediate', or 'advanced'. 
         You are to base your classification off the users input to the following questions: 
         How much do you know about investing? (Text field) -> Process with AI to return beginner, intermediate, advanced
         What stocks have you heard about?
         How long do you plan to continue to invest your money?
         How familiar are you with the stock market?
         Are you looking for growth, income, or capital preservation?
         What is your investment budget?
         Are you looking to earn dividends on your investments?
        
        Criteria:
        - Beginner: Little to no investment experience, basic financial knowledge
        - Intermediate: Some investment experience, understands basic market concepts
        - Advanced: Extensive investment knowledge, complex market understanding
        
        Respond ONLY with: 'beginner', 'intermediate', or 'advanced'
        """},
        {"role": "user", "content": {"role": "user", "content": "I do not know anything about investing"}}
    ],
    max_tokens=10  
    )
    
    # Extract and return the classification
    classification = response.choices[0].message.content.lower().strip()
    
    if classification not in ['beginner', 'intermediate', 'advanced']:
        return 'beginner'  

    return classification


result = main('blah')
print(result)
