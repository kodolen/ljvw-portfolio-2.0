import './App.scss';
import Landing from './containers/landing'
import About from './containers/about'
import Cases from './containers/cases'

const App = () => {
  return (
    <div className="App">
      <Landing />
      <About />
      <Cases />
    </div>
  );
}

export default App;
