import Box from "@mui/material/Box"
import data from "../data.json"

export function Presentation() {
    return (
        <Box id="presentation"
            sx={{
                backgroundColor: "#1A6AB1",
                maxWidth: "1000px",
                position: "relative",
                bottom: "30px"
            }}
        >
            <p style={{
                color: "#fff",
                padding: "30px",
            }}>
                {data.map(data => data.description)}
            </p>
        </Box>
    )
}
