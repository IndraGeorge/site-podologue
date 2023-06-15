import Box from "@mui/material/Box"
import image from "../assets/image.svg"

export function Banner() {
    return (
        <Box sx={{
            background: `url(${image}) center / cover no-repeat`,
            height: "400px",
            display: "flex",
            alignItems: "center",
            position: "relative"
        }}>
            <h1 style={{ fontSize: "54px", color: "#fff" }}>
                Cabinet Pédicure Podologue
            </h1>
        </Box>

    );
}
