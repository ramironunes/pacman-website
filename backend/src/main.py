# -*- coding: utf-8 -*-
# ============================================================================
# @Author: Ramiro Luiz Nunes
# @Date:   2024-06-30 10:38:31
# @Info:   A brief description of the file
# ============================================================================

from fastapi import FastAPI
from routes import example

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

app.include_router(example.router)
