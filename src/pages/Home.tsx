import { Presentation } from "../components/Presentation"
import { Expertises } from "../components/Expertises"
import { Open } from "../components/Open"
import { Contacts } from "../components/Contacts"

export function Home() {
    return (
        <>
            <Presentation />
            <Expertises />
            <Open />
            <Contacts />
        </>
    )
}
