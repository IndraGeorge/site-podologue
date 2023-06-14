import Box from "@mui/material/Box"
import image from "../assets/image.svg"
import data from "../data.json"

export function Presentation() {
    return (
        <Box id="presentation" sx={{
            backgroundColor: "#1A6AB1"
        }}
        >
            <Box sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "50px"
            }}>
                <Box style={{ width: "50%", marginLeft: "13px" }}>
                    <h1 style={{ fontSize: "54px", color: "#fff" }} >
                        Cabinet Pédicure Podologue
                    </h1>

                    <p style={{
                        color: "#fff",
                        fontSize: "18px",
                        marginTop: "40px",
                    }}>
                        {data.map(data => data.description)}
                    </p>
                </Box>
                <Box style={{
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    marginLeft: "20px"
                }}
                >
                    <img src={image} style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                    }}
                        alt="podologue"
                    />
                </Box>
            </Box>
        </Box>
    );
}
