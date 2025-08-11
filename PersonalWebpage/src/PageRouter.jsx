import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// component imports
import NavBar from './components/Navbar';

// page imports
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import DevBlogs from './pages/DevBlogs';
import Contact from './pages/Contact';
import About from './pages/About';

function PageRouter() {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Projects' element={<Projects />} />
                <Route path='/Experience' element={<Experience />} />
                <Route path='/DevBlogs' element={<DevBlogs />} />
                <Route path='/About' element={<About />} />
                <Route path='/Contact' element={<Contact />} />
            </Routes>
        </>
    )
}

export default PageRouter;