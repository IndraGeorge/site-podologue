import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from "./layout/Nav"
import { Banner } from "./components/Banner"
import { Footer } from './layout/Footer'
import { Home } from '././pages/Home'
import { LegalMentions } from './pages/LegalMentions'

export function Routing() {
    return (
        <BrowserRouter>
            <Nav />
            <Banner />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mention" element={<LegalMentions />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}