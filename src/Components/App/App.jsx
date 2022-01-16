import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

// All of the components that will be navigated to
import Home from '../Home/Home';
import FLIF from '../FLIF/FLIF';
import LimeToksiq from '../LimeToksiq/LimeToksiq';
const App = () => {
  return (
    <section className="container">

      <div className="nav">

        <Link to="/home"> <img src='YEEK_LOGO_BLACK.png' alt="Yeek Logo Black" className="home"></img></Link>
      </div>

      <div className="content">
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/flying' element={<FLIF />} />
          <Route path='/limetoksiq' element={<LimeToksiq />} />

        </Routes>
      </div>


    </section>
  );
}

export default App;
