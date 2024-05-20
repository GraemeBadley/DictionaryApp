import { useState } from 'react';
import './App.css';
import Definition from './components/Content';
import Search from './components/Search';
import NoDefinition from './components/NoDefinition';

function Dictionary() {
  const [definitions, setDefinitions] = useState(null);

  return (
    <div className="main-content">
      <Search setDefinitions={setDefinitions} />
      <div className="layout">
        {(!definitions || definitions.length === 0) &&
          <NoDefinition />
        }
        {definitions && definitions.map((definition) => (
          <Definition definition={definition} />
        ))}
      </div>
    </div>
  );
}

export default Dictionary;