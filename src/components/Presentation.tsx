import Box from "@mui/material/Box"
import data from "../data.json"

export function Presentation() {
    return (
        <Box id="presentation"
            sx={{
                backgroundColor: "#1A6AB1",
                marginLeft: "100px",
                marginRight: "100px",
                position: "relative",
                bottom: "30px"
            }}
        >
            <p style={{
                fontSize: "18px",
                color: "#fff",
                padding: "30px"
            }}>
                {data.map(data => data.description)}
            </p>
        </Box>
    )
}
