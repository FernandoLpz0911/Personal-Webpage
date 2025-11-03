import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';

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
    const [isAssembled, setIsAssembled] = useState(true);
    const navigate = useNavigate();

    const handlePageTransition = (targetPath) => {
        setIsAssembled(false);  // break down pieces

        setTimeout(() => {
            navigate(targetPath);
            setIsAssembled(true);   // reassemble pieces
        }, 1000); // time it takes
    };

    return (
        <>
            <div id="gradient">
                <NavBar onNavigate={handlePageTransition}/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Projects' element={<Projects />} />
                    <Route path='/Experience' element={<Experience />} />
                    <Route path='/DevBlogs' element={<DevBlogs />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Contact' element={<Contact />} />
                </Routes>

            </div>
        </>
    )
}

export default PageRouter;