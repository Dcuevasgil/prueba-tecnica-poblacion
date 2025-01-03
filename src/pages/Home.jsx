import React, { useEffect, useState } from 'react';
import BarChart from '../components/BarChart';
import { fetchAllCountries } from '../utils/api';

function Home() {
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  const [minPopulation, setMinPopulation] = useState("");
  const [maxPopulation, setMaxPopulation] = useState("");
  const [hasResults, setHasResults] = useState(true); // Nuevo estado para controlar si hay resultados

  useEffect(() => {
    fetchAllCountries().then((countries) => {
      const continentPopulation = countries.reduce((acc, country) => {
        const region = country.region || 'Other';
        acc[region] = (acc[region] || 0) + country.population;
        return acc;
      }, {});

      setLabels(Object.keys(continentPopulation));
      setData(Object.values(continentPopulation));
      setHasResults(true); // Restablecer a verdadero al cargar datos iniciales
    });
  }, []);

  const handleFilterChange = () => {
    fetchAllCountries().then((countries) => {
      const continentPopulation = countries.reduce((acc, country) => {
        const region = country.region || 'Other';
        acc[region] = (acc[region] || 0) + country.population;
        return acc;
      }, {});

      const filteredLabels = [];
      const filteredData = [];

      Object.keys(continentPopulation).forEach((key, index) => {
        const population = Object.values(continentPopulation)[index];
        const min = minPopulation ? Number(minPopulation) : 0;
        const max = maxPopulation ? Number(maxPopulation) : Number.MAX_SAFE_INTEGER;

        if (population >= min && population <= max) {
          filteredLabels.push(key);
          filteredData.push(population);
        }
      });

      setLabels(filteredLabels);
      setData(filteredData);
      setHasResults(filteredLabels.length > 0); // Actualizar si hay resultados
    });
  };

  return (
    <div
      style={{
        padding: '20px',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          fontSize: '50px',
          color: 'gray',
        }}
      >
        Global Population
      </h1>

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

      {/* Mostrar mensaje o gráfico */}
      {!hasResults ? (
        <div
          style={{
            textAlign: 'center',
            fontSize: '20px',
            color: 'red',
            marginTop: '50px',
          }}
        >
          No hay resultados para el rango de población seleccionado.
        </div>
      ) : (
        <BarChart labels={labels} data={data} />
      )}
    </div>
  );
}

export default Home;
