import Box from '@mui/material/Box';
import { NavLink } from '../components/NavLink'

export function Nav() {

    const currentPath = window.location.pathname
    console.log(currentPath);

    return (
        <Box sx={{ width: "100%", height: "50px", backgroundColor: "#1A6AB1" }}>
            <nav>
                <ul style={{
                    padding: "25px",
                    display: "flex",
                    justifyContent: "flex-end",
                    marginRight: "20px"
                }}>
                    <li style={{ listStyleType: "none" }}>
                        <NavLink href="/#presentation" currentPath={currentPath}>Présentation</NavLink>
                    </li>
                    <li style={{ listStyleType: "none" }} >
                        <NavLink href="/#expertises" currentPath={currentPath}>Expertises</NavLink >
                    </li>
                    <li style={{ listStyleType: "none" }} >
                        <NavLink href="/#horaires" currentPath={currentPath}>Horaires</NavLink>
                    </li>
                    <li style={{ listStyleType: "none" }} >
                        <NavLink href="/#contacts" currentPath={currentPath} >Contacts</NavLink>
                    </li>
                </ul>
            </nav>
        </Box>
    );
}


