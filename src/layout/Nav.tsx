import Box from '@mui/material/Box';
import { Link } from '../components/Link'

export function Nav() {

    return (
        <Box sx={{ width: "100%" }}>
            <nav style={{ display: "flex", }} >
                <ul style={{
                    display: "flex",
                    textAlign: "right",
                    marginRight: "20px"
                }}>
                    <li style={{ listStyleType: "none", margin: "0" }} >
                        <Link href="/presentation">Présentation</Link >
                    </li>
                    <li style={{ listStyleType: "none", margin: "0" }} >
                        <Link href="/expertises">Expertises</Link >
                    </li>
                    <li style={{ listStyleType: "none", margin: "0" }} >
                        <Link href="/horaires">Horaires</Link>
                    </li>
                    <li style={{ listStyleType: "none", margin: "0" }} >
                        <Link href="/contacts">Contacts</Link>
                    </li>
                </ul>
            </nav>
        </Box>
    );
}


