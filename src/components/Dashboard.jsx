// Hooks do React
import { useEffect, useState } from "react";

// Componentes
import Charts from "./Charts";
import Card from "./Card";
import ProjectList from "./ProjectList";

// Estilos
import "./Dashboard.css";

export default function Dashboard() {
  // Estado responsável pelo tema (dark / light)
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  /* ------------------------------
     Salva o tema sempre que mudar
  -------------------------------- */
  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className={dark ? "dashboard dark" : "dashboard"}>
      
      {/* Cabeçalho */}
      <header className="header">
        <h1>Dashboard Administrativo</h1>

        <button
          className="theme-btn"
          onClick={() => setDark((prev) => !prev)}
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </header>

      {/* Cards */}
      <div className="cards">
        <Card title="Usuários" value="120" />
        <Card title="Projetos" value="6" />
        <Card title="Tarefas" value="23" />
      </div>

      {/* Gráficos */}
      <Charts />

      {/* Lista de projetos */}
      <ProjectList />
    </div>
  );
}
