import jwt

def bad(token: str) -> bool:
  try:
    # bearer:expected python_lang_jwt_verification_bypass
    payload = jwt.decode(token, options={"verify_signature": False})
    
def ok(token: str) -> bool:
  try:
    payload = jwt.decode(token, options={"verify_signature": True})
    payload = jwt.decode(token, options={"hello_world": False})