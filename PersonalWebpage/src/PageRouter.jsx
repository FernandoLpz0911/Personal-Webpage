import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';

function PageRouter() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />

                {/**
                 * ALL ROUTES UNDERNEATH NEED TO CHANGE THE PAGE TO RESPECTIVE PAGE
                 */}
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