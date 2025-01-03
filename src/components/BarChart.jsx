import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function BarChart({ labels, data }) {
  const chartData = {
    labels, // Países en el eje vertical
    datasets: [
      {
        label: 'Population',
        data, // Población en el eje horizontal
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y', // Cambiar el gráfico a barras horizontales
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        ticks: {
          font: { size: 12 },
          color: '#000',
          callback: function (value) {
            // Formatear números con separadores de miles
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          },
        },
        beginAtZero: true,
      },
      y: {
        ticks: {
          font: { size: 12 },
          color: '#000',
          padding: 10, // Espaciado adicional entre etiquetas
        },
      },
    },
    maintainAspectRatio: false, // Permitir que la altura crezca dinámicamente
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', // Alinear verticalmente
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
        marginTop: '80px', // Espaciado desde la cabecera
      }}
    >
      <div
        style={{
          maxWidth: '800px', // Ancho máximo del gráfico
          width: '100%',
          height: `${labels.length * 50}px`, // Aumentar la altura dinámica
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}

export default BarChart;
