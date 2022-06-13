import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Container/Home/Home';
import Department from './Container/Department/Department';
import Doctors from './Container/Doctors/Doctors';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact';
import Appointment from './Container/Appointment/Appointment';
import Login from './Container/Login/Login';
import Form_1 from './Container/Forms/Form';
import PublicRoute from './Container/Route/PublicRoute';
import PrivateRoute from './Container/Route/PrivateRoute';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>  
      <Header />
      <Switch>
        <PublicRoute exact path={"/"} component={Home}/>
        <PublicRoute exact path={"/department"} component={Department}/>
        <PublicRoute exact path={"/doctors"} component={Doctors}/>
        <PublicRoute exact path={"/about"} component={About}/>
        <PrivateRoute exact path={"/contact"} component={Contact}/>
        <PrivateRoute exact path={"/appointment"} component={Appointment}/>
        <PublicRoute restricted={true} exact path={"/login"} component={Login}/>
        <PublicRoute  exact path={"/form"} component={Form_1}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
