import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './Home';

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