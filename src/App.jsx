import { Route, Routes } from "react-router-dom"
import './App.css'

// Components
import NavBar from './components/NavBar/NavBar'

// Views
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ErrorPage from "./pages/ErrorPage"
import Products from "./pages/Products"
import ItemListContainer from "./components/Products/ItemListContainer"
import ItemDetailContainer from "./components/ProductDetail/ItemDetailContainer"
import { CartProvider } from "./context/CartContext"
import CartWidget from "./components/CartWidget/CartWidget"


const App = () => {

  return (

      <div className='App'>
        <CartProvider>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/products" element={<Products />} /> */}
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/category/:categoryName" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />

            <Route path="/CartWidget" element={<CartWidget />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>     
          </CartProvider>
    </div>

  )
}

export default App
