import requests

async def getImage(prompt):
    r = requests.post(
        "https://api.deepai.org/api/text2img",
        data={
            'text': prompt,
        },
        headers={'api-key': 'db16a8b2-46cf-4abf-b1c0-9ae359dbf80a'}
    )
    return r.json()