from fastapi import FastAPI, HTTPException
from scapy.all import ARP, Ether, srp
from .controller.scan_network import scan_network
from fastapi.middleware.cors import CORSMiddleware
from .model.model import LoginRequest
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"], # En producción cambia esto a la URL de tu app React
    allow_methods=["*"],
    allow_headers=["*"],
)

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


@app.get("/scan")
async def get_devices(range: str = "10.20.22.83/30"):
    try:
        devices = scan_network(range)
        return {
            "total_devices": len(devices),
            "devices": devices
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)