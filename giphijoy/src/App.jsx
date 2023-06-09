import { Toaster } from 'react-hot-toast';
import './App.css';
import { Routing } from './router/router';

function App() {
  return (
    <div className='app' >
      <div className='main' >
        <Routing />
        <Toaster />
      </div>
    </div>
  );
}

export default App;
