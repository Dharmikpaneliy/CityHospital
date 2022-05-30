import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Container/Home/Home';
import Department from './Container/Department/Department';
import { Route } from 'react-router-dom';
import Doctors from './Container/Doctors/Doctors';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact';
import Appointment from './Container/Appointment/Appointment';
import Login from './Container/Login/Login';
import Form_1 from './Container/Forms/Form';




function App() {
  return (
    <>  
      <Header />
      <switch>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/department"} component={Department}/>
        <Route exact path={"/doctors"} component={Doctors}/>
        <Route exact path={"/about"} component={About}/>
        <Route exact path={"/contact"} component={Contact}/>
        <Route exact path={"/appointment"} component={Appointment}/>
        <Route exact path={"/login"} component={Login}/>
        <Route exact path={"/form"} component={Form_1}/>
      </switch>
      <Footer />
    </>
  );
}

export default App;
