from pydantic import BaseModel




# Modelo de datos para el login
class LoginRequest(BaseModel):
    username: str
    password: str