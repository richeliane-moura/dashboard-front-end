import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const barData = [
  { name: "Jan", projetos: 4 },
  { name: "Fev", projetos: 6 },
  { name: "Mar", projetos: 8 },
  { name: "Abr", projetos: 5 }
];

const pieData = [
  { name: "Concluídos", value: 6 },
  { name: "Em andamento", value: 3 },
  { name: "Pendentes", value: 2 }
];

const COLORS = ["#2563eb", "#16a34a", "#f59e0b"];

export default function Charts() {
  return (
    <div className="charts">
      {/* Gráfico de Barras */}
      <div className="chart-box">
        <h3>Projetos por mês</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="projetos" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico de Pizza */}
      <div className="chart-box">
        <h3>Status dos projetos</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={80}
              label
            >
              {pieData.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
