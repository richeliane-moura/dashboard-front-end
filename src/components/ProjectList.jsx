export default function ProjectList() {
  const projects = [
    { name: "E-commerce React", status: "Concluído" },
    { name: "Dashboard Admin", status: "Em andamento" },
    { name: "Quiz React", status: "Concluído" },
  ];

  return (
    <div className="list">
      <h2>Projetos</h2>
      <ul>
        {projects.map((p, i) => (
          <li key={i}>
            <span>{p.name}</span>
            <span className={p.status === "Concluído" ? "done" : "progress"}>
              {p.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
