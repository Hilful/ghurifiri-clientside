import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import About from './Pages/About/About';
import Features from './Pages/About/Features/Features';
import AddServices from './Pages/AddServices/AddServices';
import Blog from './Pages/Blog/Blog';
import Booking from './Pages/Booking/Booking';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import MyPlace from './Pages/MyPlace/MyPlace';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Services from './Pages/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import NavBar from './Pages/Shared/NavBar/NavBar';
import TotalBooking from './Pages/TotalBooking/TotalBooking';
import './App.css'
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/home">
              <Home></Home>
            </Route>
            <Route  path="/blog">
              <Blog></Blog>
            </Route>
            <Route  path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute  path="/addServices">
              <AddServices></AddServices>
            </PrivateRoute>
            <Route path="/features">
              <Features></Features>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute exact path="/myPlace">
              <MyPlace></MyPlace>
            </PrivateRoute>

            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            {/* totalBooking  */}
            <PrivateRoute exact path="/totalBooking">
              <TotalBooking></TotalBooking>
            </PrivateRoute>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
          
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
