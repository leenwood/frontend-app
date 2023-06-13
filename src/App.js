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
import CareerTest from "./pages/career-test/career-test";
import Test from "./pages/career-test/test/test";
import IntermediateResult from "./pages/results/intermediate-result/intermediate-result";
import EndResult from "./pages/results/end-result/end-result";
import MainPage from "./pages/main/main";
import Register from './pages/autohorization/index';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route index element={<Home/>}/>
                    <Route path="checkboxes" element={<Checkbox id='1' title='Test'/>}/>
                    <Route path="buttons" element={<Button size='extraLarge' title='Test'/>}/>
                    <Route path="radiobuttons" element={<RadioButton id='1' title='Test'/>}/>
                    <Route path="checkboxes" element={<Checkbox/>}/>
                    <Route path="buttons" element={<Button size='large' title='Test'/>}/>
                    <Route path="radiobuttons" element={<RadioButton/>}/>
                    <Route path="blogs" element={<Blogs/>}/>
                    <Route path="*" element={<NoPage/>}/>
                    <Route path="nav" element={<Navbar/>}></Route>
                    <Route path="card" element={<Card name="Программирование на Python" card_name="card_python"/>}/>
                    <Route path="course" element={<Course/>}/>
                    <Route path="registration" element={<Registration/>}/>
                    <Route path='calendar' element={<Calendar/>}/>
                    <Route path="directions" element={<Directions/>}/>
                    <Route path="cards" element={<Cards/>}/>
                    <Route path="course_description" element={<CourseDescription
                        courseName="МУП ДМиМЛ_09 Дискретная математика и математическая логика" progress="10%"
                        annotation="Дискретная математика - одна из важнейших составляющих современной математики. С одной стороны, она включает фундаментальные основы математики - теорию множеств, математическую логику, теорию алгоритмов; с другой стороны, является основным математическим аппаратом информатики и вычислительной техники и потому служит базой для многочисленных приложений в экономике, технике, социальной сфере."/>}/>
                    <Route path='allCourse' element={<AllCourse/>}/>
                    <Route path='allTeachers' element={<AllTeachers/>}/>
                    <Route path='trajectoryGeneration' element={<GenerateTrejectory/>}/>
                    <Route path="career_test" element={<CareerTest/>}/>
                    <Route path='test' element={<Test/>}/>
                    <Route path="intermediateresult"
                           element={<IntermediateResult data={[8.13, 17.08, 28.65, 17.56, 28.58]}/>}/>
                    <Route path="endresult" element={<EndResult subject={{
                        data: [83, 82, 78, 72, 32],
                        description: [
                            `Умеренный интерес к образам и визуализации. Вам может быть интересно работать с изображениями, визуальными моделями, графической информацией и художественными представлениями. Вы время от времени стремитесь создавать, воспроизводить образы и оперировать ими, видоизменять их и достраивать.`,
                            'Текст и языки sample text',
                            'Система и механизмы sample text',
                            'Люди и взаимодействие sample text',
                            'Числа и вычисления sample text'
                        ]
                    }}
                                                                profession={{
                                                                    data: [95, 73, 65, 17, 8],
                                                                    description: [
                                                                        `Сильный интерес к структурированию и контролю. Вам интересно систематизировать и проверять данные, контролировать их передачу, следить за выполнением работы и качеством продукта. Вам нравится получать информацию, делать её удобной для использования, составлять регулярную отчётность, объяснять различные показатели, тестировать.`,
                                                                        'Исследование и анализ sample text',
                                                                        'Продвижение sample text',
                                                                        'Организация и управление sample text',
                                                                        'Разработка и создание нового sample text'
                                                                    ]
                                                                }}
                                                                chartData={[5.97, 23.34, 6.3, 28.14, 36.25]}
                                                                chartDescription={'Корпоративная: ориентация на стабильность, доход, работу в крупных компаниях, вертикальный рост (стремление к руководящим позициям).\n' +
                                                                    'Профессиональная: ориентация на профессиональное развитие, содержание работы, горизонтальный рост.\n' +
                                                                    'Статическая: ориентация на стабильность, комфорт, условия труда.\n' +
                                                                    'Творческая: ориентация на создание нового, поиск и увлеченность своим делом, генерацию идей. Такая карьера часто переходит в предпринимательскую.\n' +
                                                                    'Предпринимательская: ориентация на реализацию идей, рост статуса и благосостояния, стремление к независимости от внешних факторов.'}
                    />}/>
                    <Route path='register' element={<Register/>}/>
                </Route>
		<Route path='mainPage' element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
