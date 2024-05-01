import './App.css';
import Definition from './components/Content';

function Dictionary({ definition }) {
  return (
    <div className="layout">
      <Definition definition={definition} />
    </div>
  );
}

export default Dictionary;