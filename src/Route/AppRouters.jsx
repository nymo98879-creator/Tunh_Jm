import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Notfound from "../404/Notfound"
import About from "../components/About"
import Shop from "../components/Shop"
import Blog from "../components/Blog"


export default function AppRouters(){
    return(
        <>
            
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/blog" element={<Blog/>}/>
                    <Route path="/about" element={<About/>} />
                    <Route path="*" element={<Notfound/>} />
                </Routes>
           
        </>
    )
}