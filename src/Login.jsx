import React, { useState } from 'react';
import { Lock, User, Server, ShieldCheck, Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState(''); // Estado para usuario
  const [password, setPassword] = useState(''); // Estado para password
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // Estado para errores

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // 2. Llamada a la API de FastAPI
      const response = await axios.post('http://127.0.0.1:8000/login', {
        username: username,
        password: password
      });

      if (response.data.status === "success") {
        localStorage.setItem('userAuthenticated', 'true'); 
        localStorage.setItem('userName', response.data.user.name);
        navigate('/dashboard');
      }
    } catch (err) {
      // 3. Manejo de errores (Credenciales incorrectas)
      setError(err.response?.data?.detail || "Error de conexión con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decoración de fondo (Efecto de red) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-full w-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="max-w-md w-full z-10">
        {/* Card Principal */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl p-8">
          
          {/* Header con Icono de Switch */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-xl mb-4 border border-blue-500/30">
              <Server className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">SwitchManager <span className="text-blue-500">v2.0</span></h1>
            <p className="text-slate-400 text-sm mt-2">Gestión de infraestructura de red centralizada</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input de Usuario */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Usuario</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  placeholder="admin_network"
                  required
                />
              </div>
            </div>

            {/* Input de Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 ml-1">Contraseña</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-10 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Opciones Adicionales */}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500/20" />
                <span className="text-slate-400 group-hover:text-slate-300">Recordar terminal</span>
              </label>
              <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">¿Olvidó su acceso?</a>
            </div>

            {/* Botón de Entrada */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-900/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5 mr-2" />
                  Autenticar en Nodo
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer del Login */}
        <p className="text-center mt-8 text-slate-500 text-sm">
          Conexión segura vía SSH/HTTPS <br />
          © 2026 Network Systems Inc.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;