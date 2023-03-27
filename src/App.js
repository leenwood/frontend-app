import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Admin from "./pages/Admin";
import NoPage from "./pages/NoPage";
import Buttons from "./pages/Buttons";
import RadioButtons from "./pages/RadioButtons";
import Checkboxes from "./pages/Checkboxes";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="checkboxes" element={<Checkboxes/>}/>
                    <Route path="buttons" element={<Buttons/>}/>
                    <Route path="radiobuttons" element={<RadioButtons/>}/>
                    <Route path="blogs" element={<Blogs/>} />
                    <Route path="toadmin" element={<Admin/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
