import './App.css';

import State from './components/State'
import Effect from './components/Effect'
import Ref from './components/Ref';
import Callback from './components/Callback';
function App() {
  return (
    <div className="App">
      <h1>Hooks</h1>
      <h2>useState</h2>
      <State />
      <br />
      <br />
      <h2>useEffect</h2>
      <Effect />
      <br />
      <br />
      <h2>useRef</h2>
      <Ref />
      <br />
      <br />
      <h2>useCallback</h2>
      <Callback />
      <br />
      <br />
    </div>
  );
}

export default App;
