import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/checkboxes">Checkboxes</Link>
                    </li>
                    <li>
                        <Link to="/radiobuttons">Radio</Link>
                    </li>
                    <li>
                        <Link to="/buttons">Buttons</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <a href="/admin">Admin</a>
                    </li>
                    <li>
                        <Link to="/registration">Registration</Link>
                    </li>
                    <li>
                        <Link to="/calendar">Calendar</Link>
                    </li>
                    <li>
                        <Link to="/directions">Directions</Link>
                    </li>
                    <li>
                        <Link to="/nav">Navbar</Link>
                    </li>
                    <li> <Link to="/card">Card</Link></li>
                    <li> <Link to="/cards">Cards</Link></li>
                    <li> <Link to="/course_description">Course_Descriptions</Link></li>
                    <li> <Link to="/course">Course</Link></li>
                    <li> <Link to="/allCourse">All Course</Link></li>
                    <li> <Link to="/allTeachers">All Teachers</Link></li>
                    <li> <Link to="/trajectoryGeneration">Trajectory Generation</Link></li>
            </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
