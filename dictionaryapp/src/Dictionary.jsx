import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Search from './components/Search';
import NoDefinition from './components/NoDefinition';

function Dictionary() {
  const [definitions, setDefinitions] = useState(null);
  console.log(definitions)

  return (
    <div className="main-content">
      <Search setDefinitions={setDefinitions} />
      <div className="layout">
        {(!definitions || definitions.length === 0) &&
          <NoDefinition />
        }
        {definitions && definitions.map((definition) => (
          <Content definition={definition} setDefinitions={setDefinitions} />
        ))}
      </div>
    </div>
  );
}

export default Dictionary;