import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './src/Info/layouts/Header';
import Home from './src/Info/pages/Home/Home';
import Show from './src/Info/pages/Show/Show';
import NoMatch from './src/Info/pages/Error/NoMatch';
import FooterSection from './src/Info/components/Sections/FooterSection';
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='home' element={<Home />} />
                <Route path='show' element={<Show />} />
                <Route path='*' element={<NoMatch />} />
            </Routes>
            <FooterSection />
        </BrowserRouter>
    )
}
createRoot(document.getElementById('root')).render(<App />)
