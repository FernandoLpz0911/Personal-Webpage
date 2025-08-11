import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';

function PageRouter() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </>
    )
}

export default PageRouter;