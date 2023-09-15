import { Route, Routes } from 'react-router-dom';

import { Home, Gallery } from './pages';

function App() {
    return (
        <div className="scroll-smooth">
            <Routes>
                <Route index element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </div>
    );
}

export default App;
