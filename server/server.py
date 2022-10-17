from datetime import datetime
from http.client import HTTPException
from fastapi import FastAPI
from pydantic import BaseModel
from firebase.admin import db
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from entry import getImage

app = FastAPI(
    title="Montage My Life"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Entry(BaseModel):
    uid: str
    date: str
    caption: str
    prompt: str
    entry: str
    image: str

@app.post("/addEntry/")
async def upload_entry(entry: Entry):
    print(jsonable_encoder(entry))
    entry.image = await getImage(entry.prompt)
    print(entry.image)

    db.collection(entry.uid).document(entry.date).set(jsonable_encoder(entry))

@app.post("/deleteEntry/{uid}/{date}")
async def delete_entry(uid: str, date: str):
    db.collection(uid).document(date).delete()

@app.get("/getEntries/{uid}")
async def fetch_entries(uid: str):
    docs = db.collection(uid).stream()
    entries = []
    for doc in docs:
        entries.append(doc.to_dict())
    return entries
