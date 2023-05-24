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
import Calendar from "./pages/calendar"
import Directions from "./pages/cabinet/Directions";
import Card from "./pages/ui-elements/card/Card.jsx";
import Cards from "./pages/cards/Сards"
import Navbar from "./pages/ui-elements/navbar/Navbar";
import CourseDescription from "./pages/course-description/course-description";
import Course from "./pages/course-priority/course/course";
import AllCourse from './pages/course-priority/all-course';
import AllTeachers from './pages/teacher-priority/all-teachers';
import GenerateTrejectory from './pages/trajectory-generation/trajectory-generation';


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
                    <Route path="course" element={<Course />} />
                </Route>
                <Route path="registration" element={<Registration/>} />
                <Route path='calendar' element={<Calendar/>} />
                <Route path="directions" element={<Directions />} />
                <Route path="cards" element={<Cards/>} />
                <Route path="course_description" element={<CourseDescription courseName = "МУП ДМиМЛ_09 Дискретная математика и математическая логика" progress = "10%"
                annotation = "Дискретная математика - одна из важнейших составляющих современной математики. С одной стороны, она включает фундаментальные основы математики - теорию множеств, математическую логику, теорию алгоритмов; с другой стороны, является основным математическим аппаратом информатики и вычислительной техники и потому служит базой для многочисленных приложений в экономике, технике, социальной сфере."/>} />
                <Route path='allCourse' element={<AllCourse />} />
                <Route path='allTeachers' element={<AllTeachers />} />
                <Route path='trajectoryGeneration' element={<GenerateTrejectory />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
