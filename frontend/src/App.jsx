import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import SingleProductPage from "./pages/SingleProductPage"

function App() {
  return (
    <div data-theme="mytheme1">

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<SingleProductPage />} />
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
