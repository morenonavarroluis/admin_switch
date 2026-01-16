from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configuración de CORS para que React pueda comunicarse con FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"], # En producción cambia esto a la URL de tu app React
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo de datos para el login
class LoginRequest(BaseModel):
    username: str
    password: str

@app.post("/login")
async def login(data: LoginRequest):
    # Simulación de base de datos
    # En un sistema real, aquí verificarías contra una DB con hash de contraseñas
    if data.username == "admin" and data.password == "switch123":
        return {
            "status": "success",
            "message": "Autenticación exitosa",
            "user": {"role": "admin", "name": "Operador de Red"}
        }
    
    raise HTTPException(status_code=401, detail="Credenciales incorrectas")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)