import './App.css';
import MenuBar from './Menu/MenuBar';
import Carousel from './Carousel/Carousel.js';
import CardSection from './Card/CardSection.js';

function App() {
  return (
    <div className="App">
      <MenuBar/>
      <Carousel/>
      <CardSection/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
