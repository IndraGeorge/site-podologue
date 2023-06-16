import Box from "@mui/material/Box"
import image from "../assets/image.svg"
import useMediaQuery from '@mui/material/useMediaQuery'

export function Banner() {

    const matches = useMediaQuery('(min-width:480px)')

    return (
        <Box sx={{
            background: `url(${image}) center / cover no-repeat`,
            height: "400px",
            display: "flex",
            alignItems: "center",
            position: "relative"
        }}>
            <h1 style={{ fontSize: matches ? "54px" : "40px", color: "#fff", textAlign: "center" }}>
                Cabinet Pédicure Podologue
            </h1>
        </Box>

    );
}
