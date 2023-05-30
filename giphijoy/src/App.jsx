import './App.css';
import Header from './components/header/header'
// import SearchContainer from './components/searchContainer/searchContainer';
import Home from './components/home/home'

function App() {
  return (
    <div className='app' >
      <div className='main' >
        <Header />
        {/* <SearchContainer /> */}
        <Home />
      </div>
    </div>
  );
}

export default App;
