import requests
import os
from dotenv import load_dotenv

# Return the url to the image
def post_request(prompt):
    load_dotenv()  

    r = requests.post(
        "https://api.deepai.org/api/text2img",
        data={
            'text': prompt,
        },
        headers={'api-key': os.getenv("API-KEY")}
    )
    url = r.json()['output_url']
    return url


## test function
print(post_request("sunset"))