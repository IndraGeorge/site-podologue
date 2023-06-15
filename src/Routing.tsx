import { BrowserRouter } from "react-router-dom"
import { Nav } from "./layout/Nav"
import { Presentation } from "./components/Presentation"
import { Banner } from "./components/Banner"
import { Expertises } from "./components/Expertises"
import { Open } from "./components/Open"
import { Contacts } from "./components/Contacts"
import { Footer } from "./layout/Footer"

export function Routing() {
    return (
        <BrowserRouter>
            <Nav />
            <Banner />
            <Presentation />
            <Expertises />
            <Open />
            <Contacts />
            <Footer />
        </BrowserRouter>
    )
}