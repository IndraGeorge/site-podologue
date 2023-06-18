import Box from "@mui/material/Box"
import data from "../data.json"
import { Typography } from '@mui/material'

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
            <Typography sx={{
                color: "#fff",
                padding: "30px",
            }}>
                {data.map(data => data.description)}
            </Typography>
        </Box>
    )
}
