import { styled } from "@mui/material";
import { Box, Typography } from "@mui/material"

export function Open() {

    const DaysAndHours = styled(Typography)({
        marginBottom: "8px"
    })

    return (
        <Box id="horaires" sx={{ marginTop: "100px", backgroundColor: "#EDE6E6", padding: "30px" }}>
            <h2
                style={{
                    textAlign: "center",
                    marginBottom: "25px",
                    fontSize: "32px"
                }}
            >
                Horaires d'ouvertures
            </h2>
            <Box sx={{ display: "flex", width: "250px" }}>
                <Box>
                    <DaysAndHours>Lundi:</DaysAndHours>
                    <DaysAndHours>Mardi:</DaysAndHours>
                    <DaysAndHours>Mercredi:</DaysAndHours>
                    <DaysAndHours>Jeudi:</DaysAndHours>
                    <DaysAndHours>Vendredi:</DaysAndHours>
                </Box>
                <Box>
                    <DaysAndHours>8h30 - 18h00</DaysAndHours>
                    <DaysAndHours>8h30 - 18h00</DaysAndHours>
                    <DaysAndHours>8h30 - 18h00</DaysAndHours>
                    <DaysAndHours>8h30 - 18h00</DaysAndHours>
                    <DaysAndHours>8h30 - 18h00</DaysAndHours>
                </Box>
            </Box>
            <Box sx={{ textAlign: "center", marginTop: "20px" }}>
                <p style={{ fontSize: "18px" }}>Fermé:</p>
                <p style={{ fontSize: "18px" }}>Samedi & Dimanche</p>
            </Box>
        </Box>
    );
}
