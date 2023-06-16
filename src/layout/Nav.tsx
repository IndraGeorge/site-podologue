import Box from '@mui/material/Box';
import { Link } from '../components/Link'
import useMediaQuery from '@mui/material/useMediaQuery'


export function Nav() {

    const matches = useMediaQuery('(min-width:480px)')

    return (

        <Box sx={{ width: "100%" }}>
            <nav style={{ backgroundColor: "#1A6AB1" }} >

                <ul style={{
                    display: "flex",
                    justifyContent: matches ? "flex-end" : "center",
                    gap: matches ? "45px" : "23px",
                    margin: "20px",
                }}>
                    <li style={{ listStyleType: "none", margin: "0" }} >
                        <Link href="/#expertises">Expertises</Link >
                    </li>
                    <li style={{ listStyleType: "none", margin: "0" }} >
                        <Link href="/#horaires">Horaires</Link>
                    </li>
                    <li style={{ listStyleType: "none", margin: "0" }} >
                        <Link href="/#contacts">Contacts</Link>
                    </li>
                </ul>
            </nav>
        </Box>

    )
}


