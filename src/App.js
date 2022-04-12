import './App.css';
import Slidingtext from './components/Slidingtext';
import Corousel from './components/Corousel';
import Home from './components/Home';
import Main from './components/Main';
import Card from './components/Card';
import Ecom from './components/Ecom';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className=" md:mx-96">
      <Home />
      <Corousel />
      <Slidingtext />
      <Main  />
      <Ecom />
      <Card />
      <Footer />
    </div>
    

    
    </>
  );
}

export default App;
