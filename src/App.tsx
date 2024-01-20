import Nav from './Nav';
import Head from './Head';
import About from './About';
import Home from './Home';
import Links from './Links';

function App() {
  let mainContent
  switch (window.location.pathname) {
    case "/":
      mainContent = <Head />;
      break;
    case "/about":
      mainContent = <About />;
      break;
    case "/links":
      mainContent = <Links />;
      break;
    default:
      mainContent = <Home />;
      break;
  }
  return <div>
    <Nav />
    {mainContent}
    </div>;
    
}

export default App;
