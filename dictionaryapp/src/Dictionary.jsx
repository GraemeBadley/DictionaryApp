import { useState } from 'react';
import './App.css';
import Definition from './components/Content';
import Search from './components/Search';

function Dictionary() {
  const [definitions, setDefinitions] = useState(null);

  return (
    <div className="main-content">
      <Search setDefinitions={setDefinitions} />
      <div className="layout">
        {definitions != null && definitions.map((definition) => (
          <Definition definition={definition} />
        ))}
      </div>
    </div>
  );
}

export default Dictionary;