import Box from "@mui/material/Box"
import data from "../data.json"
import {Typography} from "@mui/material"

export function Presentation() {

    const presentation = data.map(data => data.description)

    return (
        <Box id="presentation"
            sx={{
                backgroundColor: "#1A6AB1",
                maxWidth: "1000px",
                position: "relative",
                bottom: "30px"
            }}
        >
            <Typography style={{
                color: "#fff",
                padding: "30px",
                fontFamily:"Montserrat"
            }}>
                {presentation}
            </Typography>
        </Box>
    )
}
