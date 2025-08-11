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
                <Route path='/Projects' element={<Home />} />
                <Route path='/Experience' element={<Home />} />
                <Route path='/DevBlogs' element={<Home />} />
                <Route path='/About' element={<Home />} />
                <Route path='/Contact' element={<Home />} />
            </Routes>
        </>
    )
}

export default PageRouter;