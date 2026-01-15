// src/components/Charts/PieChart.jsx
import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#06b6d4', '#1e293b']; // Verde para saludable, Naranja para no saludable

function CustomPieChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default CustomPieChart;