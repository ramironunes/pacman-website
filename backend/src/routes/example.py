# -*- coding: utf-8 -*-
# ============================================================================
# @Author: Ramiro Luiz Nunes
# @Date:   2024-06-30 10:39:24
# @Info:   A brief description of the file
# ============================================================================

from fastapi import APIRouter

router = APIRouter()

@router.get("/example")
def read_example():
    return {"message": "This is an example route"}

