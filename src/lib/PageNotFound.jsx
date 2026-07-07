import { useLocation, useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <h1 className="text-7xl font-light text-slate-300">404</h1>

        <h2 className="text-2xl font-semibold mt-4">
          Página não encontrada
        </h2>

        <p className="mt-2 text-slate-600">
          A página <strong>{location.pathname}</strong> não existe.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-8 px-5 py-2 rounded-lg bg-black text-white"
        >
          Voltar para Home
        </button>
      </div>
    </div>
  );
}