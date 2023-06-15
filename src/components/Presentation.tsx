import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import image from "../assets/image.svg"
import data from "../data.json"

export function Presentation() {
    return (
        <Box id="presentation" sx={{
            backgroundColor: "#1A6AB1"
        }}>
            <Grid container sx={{
                justifyContent: "space-around",
                alignItems: "center",
                padding: "20px",
                flexDirection: { xs: 'column', sm: 'row' }
            }}>
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ marginLeft: "13px" }}>
                    <h1 style={{ fontSize: "54px", color: "#fff" }}>
                        Cabinet Pédicure Podologue
                    </h1>
                    <p style={{
                        color: "#fff",
                        fontSize: "18px",
                        marginTop: "40px",
                    }}>
                        {data.map(data => data.description)}
                    </p>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ borderRadius: "50%", overflow: "hidden", marginLeft: "20px" }}>
                    <img src={image} style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }}
                        alt="podologue"
                    />
                </Grid>
            </Grid>
        </Box>

    );
}
