import './App.css'
import HomeScreen from './Screens/homeScreen'
import CartScreen from './Screens/cartScreen'
import ShippingScreen from './Screens/shippingScreen'
import PaymentScreen from './Screens/paymentScreen'
import PlaceOrderScreen from './Screens/placeOrderScreen'
import OrderScreen from './Screens/orderScreen'
import OrderListScreen from './Screens/orderListScreen'
import LoginScreen from './Screens/loginScreen'
import RegisterScreen from './Screens/registerScreen'
import ProfileScreen from './Screens/profileScreen'
import ProductsScreen from './Screens/productsScreen'
import ProductScreen from './Screens/productScreen'
import ContactScreen from './Screens/contactScreen'
import AboutScreen from './Screens/aboutScreen'
import Navi from './Components/Navi'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Router>
        <Navi />
        <Route path='/' exact component={HomeScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/shipping' component={ShippingScreen} />
        <Route path='/payment' component={PaymentScreen} />
        <Route path='/placeorder' component={PlaceOrderScreen} />
        <Route path='/order/:id' component={OrderScreen} />
        <Route path='/admin/orderlist' component={OrderListScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/products' component={ProductsScreen} />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/about' component={AboutScreen} />
        <Route path='/contact' component={ContactScreen} />
        <Footer />
      </Router>
    </>
  )
}

export default App
