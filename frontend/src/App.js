
// import './App.css';

import Router from "./pages/Router";
import Footer from "./pages/Footer";
import './pages/footer.css';
import './pages/home.css';
import './pages/Login/login.css';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  
  return (
    <div  className="App">
      <header className="App-header">
       
      <Router/>
    
     <Footer/>
      </header>
    </div>
  );
}

export default App;
