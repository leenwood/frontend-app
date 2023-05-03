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
                        <Link to="/directions">Directions</Link>
                    </li>
                        <Link to="/nav">Navbar</Link>
                    </li>
                    <li> <Link to="/card">Card</Link></li>
                    <li> <Link to="/cards">Cards</Link></li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
