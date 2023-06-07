import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Navi from './Components/Navi'
import AboutScreen from './Screens/aboutScreen'
import CakeScreen from './Screens/cakeScreen'
import CartScreen from './Screens/cartScreen'
import ContactScreen from './Screens/contactScreen'
import CupcakeScreen from './Screens/cupcakeScreen'
import HomeScreen from './Screens/homeScreen'
import LoginScreen from './Screens/loginScreen'
import PaymentScreen from './Screens/paymentScreen'
import PlaceRequestScreen from './Screens/placeRequestScreen'
import ProductsScreen from './Screens/productsScreen'
import ProfileScreen from './Screens/profileScreen'
import PupcakesScreen from './Screens/pupcakesScreen'
import RegisterScreen from './Screens/registerScreen'
import RequestListScreen from './Screens/requestListScreen'
import RequestScreen from './Screens/requestScreen'
import ShippingScreen from './Screens/shippingScreen'
import ThankyouScreen from './Screens/thankyouScreen'
import TriflesScreen from './Screens/triflesScreen'

function App() {
  return (
    <>
      <Router>
        <Navi />
        <Route path='/' exact component={HomeScreen} />
        <Route path='/cakes' component={CakeScreen} />
        <Route path='/cupcakes' component={CupcakeScreen} />
        <Route path='/trifles' component={TriflesScreen} />
        <Route path='/pupcakes' component={PupcakesScreen} />
        <Route path='/thankyou' component={ThankyouScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/shipping' component={ShippingScreen} />
        <Route path='/payment' component={PaymentScreen} />
        <Route path='/placerequest' component={PlaceRequestScreen} />
        <Route path='/request/:id' component={RequestScreen} />
        <Route path='/admin/requestlist' component={RequestListScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/products' component={ProductsScreen} />
        <Route path='/about' component={AboutScreen} />
        <Route path='/contact' component={ContactScreen} />
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
