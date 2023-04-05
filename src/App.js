import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Blogs from "./pages/blogs/Blogs";
import Admin from "./pages/admin/Admin";
import NoPage from "./pages/nopage/NoPage";
import Button from "./pages/ui-elements/button/Button";
import RadioButton from "./pages/ui-elements/radiobutton/RadioButton";
import Checkbox from "./pages/ui-elements/checkbox/Checkbox";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="checkboxes" element={<Checkbox id='1'/>}/>
                    <Route path="buttons" element={<Button/>}/>
                    <Route path="radiobuttons" element={<RadioButton id='1'/>}/>
                    <Route path="blogs" element={<Blogs/>} />
                    <Route path="toadmin" element={<Admin/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
