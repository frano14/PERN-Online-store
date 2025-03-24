import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {
  return (
    <div data-theme="mytheme1">

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

      <div className="py-[400px] testni">r</div>

    </div>
  )
}

export default App
