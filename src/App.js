import logo from './logo.svg';
import './App.css';
import { Counter } from './Components';

function App() {
  return (
    <div >
        <Counter initial={4}/>
        {/* <Counter initial={4}/>
        <Counter initial={4}/> */}
    </div>
  );
}

export default App;
