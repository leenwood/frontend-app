import './App.css';
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Blogs from "./pages/blogs/Blogs";
import NoPage from "./pages/nopage/NoPage";
import Button from "./pages/ui-elements/button/Button";
import RadioButton from "./pages/ui-elements/radiobutton/RadioButton";
import Checkbox from "./pages/ui-elements/checkbox/Checkbox";
import Registration from "./pages/registration/Registration";
import Card from "./pages/ui-elements/card/Card.jsx";
import Cards from "./pages/cards/Сards"


import Navbar from "./pages/ui-elements/navbar/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="checkboxes" element={<Checkbox id='1' title='Test'/>}/>
                    <Route path="buttons" element={<Button/>}/>
                    <Route path="radiobuttons" element={<RadioButton id='1' title='Test'/>}/>
                    <Route path="checkboxes" element={<Checkbox/>}/>
                    <Route path="buttons" element={<Button size='large' title='Test'/>}/>
                    <Route path="radiobuttons" element={<RadioButton/>}/>
                    <Route path="blogs" element={<Blogs/>} />
                    <Route path="*" element={<NoPage/>}/>
                    <Route path="nav" element={<Navbar/>}></Route>
                    <Route path="card" element={<Card name="Программирование на Python" card_name="card_python"/>}/>
                </Route>
                <Route path="registration" element={<Registration/>} />
                <Route path="cards" element={<Cards/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
