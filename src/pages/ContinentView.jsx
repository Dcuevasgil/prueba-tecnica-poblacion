import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAllCountries } from '../utils/api';
import BarChart from '../components/BarChart';

function ContinentView() {
  const { continentName } = useParams(); // Nombre del continente desde la URL
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  const [minPopulation, setMinPopulation] = useState(""); // Inicialmente vacío
  const [maxPopulation, setMaxPopulation] = useState(""); // Inicialmente vacío

  useEffect(() => {
    fetchAllCountries().then((countries) => {
      const filtered = countries.filter((country) => country.region === continentName);

      setLabels(filtered.map((country) => country.name.common)); // Nombres de los países
      setData(filtered.map((country) => country.population)); // Poblaciones
    });
  }, [continentName]);

  const handleFilterChange = () => {
    fetchAllCountries().then((countries) => {
      const filtered = countries
        .filter((country) => country.region === continentName)
        .filter((country) => {
          const min = minPopulation ? Number(minPopulation) : 0;
          const max = maxPopulation ? Number(maxPopulation) : Number.MAX_SAFE_INTEGER;
          return country.population >= min && country.population <= max;
        });

      setLabels(filtered.map((country) => country.name.common));
      setData(filtered.map((country) => country.population));
    });
  };

  return (
    <div
      style={{
        padding: '20px',
      }}
    >
      {/* Título con el nombre del continente */}
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          textTransform: 'capitalize',
          color: '#808080'
        }}
      >
        Population in {continentName}
      </h1>

      {/* Filtro poblacional */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        <label
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginRight: '10px',
            color: '#808080',
          }}
        >
          Filtro Poblacional:
        </label>
        <input
          type="number"
          placeholder="Min"
          value={minPopulation}
          onChange={(e) => setMinPopulation(e.target.value)}
          style={{
            padding: '5px 10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginRight: '10px',
            backgroundColor: '#fff',
            color: '#000',
          }}
        />
        <input
          type="number"
          placeholder="Max"
          value={maxPopulation}
          onChange={(e) => setMaxPopulation(e.target.value)}
          style={{
            padding: '5px 10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: '#fff',
            color: '#000',
          }}
        />
        <button
          onClick={handleFilterChange}
          style={{
            padding: '5px 15px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            marginLeft: '10px',
            cursor: 'pointer',
          }}
        >
          Aplicar
        </button>
      </div>

      {/* Gráfico */}
      <BarChart labels={labels} data={data} />
    </div>
  );
}

export default ContinentView;
