import Box from "@mui/material/Box"
import { Link } from "../components/Link"
import useMediaQuery from "@mui/material/useMediaQuery"

export function Nav() {

    const matches = useMediaQuery("(min-width:480px)")
    
    const styleLink = {
        listStyleType: "none", 
        margin: "0"
    }

    return (

        <Box sx={{ width: "100%" }}>
            <nav style={{ backgroundColor: "#1A6AB1", height: "64px" }} >

                <ul style={{
                    display: "flex",
                    justifyContent: matches ? "flex-end" : "space-around",
                    gap: matches ? "45px" : "16px",
                    margin: "20px",
                }}>
                    <li style={styleLink} >
                        <Link href="/#expertises">Expertises</Link >
                    </li>
                    <li style={styleLink} >
                        <Link href="/#horaires">Horaires</Link>
                    </li>
                    <li style={styleLink} >
                        <Link href="/#contacts">Contacts</Link>
                    </li>
                </ul>
            </nav>
        </Box>

    )
}


