import './App.css';
import Header from './components/header/header'
import SearchContainer from './components/searchContainer/searchContainer';
import Media from './components/media/media'

function App() {
  return (
    <div className='app' >
      <div className='main' >
        <Header />
        <SearchContainer />
        <Media />
      </div>
    </div>
  );
}

export default App;
