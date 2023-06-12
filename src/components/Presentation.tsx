import Box from "@mui/material/Box"
import { Typography } from "@mui/material";
import image from "../assets/image.svg"

export function Presentation() {
    return (
        <Box id="presentation" height="730px" sx={{ backgroundColor: "#1A6AB1" }}>
            <Box sx={{
                padding: "100px 0 0 0",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
            }}>
                <Box sx={{ width: "50%" }}>
                    <Typography variant="h1" sx={{ fontSize: "60px", color: "#fff" }} >
                        Cabinet Pédicure Podologue
                    </Typography>
                    <p style={{
                        color: "#fff",
                        fontSize: "18px",
                        textAlign: "justify",
                        marginTop: "40px"
                    }}>
                        Madame Marine VALAMBA, Pédicure-Podologue D.E diplômée de l'institut de formation
                        de Toulouse, vous accueille dans son cabinet situé à la commune de Rémire-Montjoly,
                        au 14 rue du Père Gros, 97354, et souhaite vous faire connaître son éventail de
                        savoir-faire : Le pédicure-podologue est un professionnel de santé qui soigne les
                        affections de la peau et des ongles du pied. Il réalise également des appareillages
                        tels que des semelles orthopédiques classiques et thermoformées, des orthoplasties,
                        des orthonyxies, ou encore des onychoplasties.
                    </p>
                </Box>
                <img src={image} style={{ width: "35%", borderRadius: "100%" }} alt="podologue" />
            </Box>
        </Box>
    );
}
