import Box from "@mui/material/Box"

export function Open() {
    return (
        <Box id="horaires">
            <h2 style={{
                textAlign: "center",
                color: "#1E1E1E",
                margin: "40px",
                fontSize: "32px"
            }}
            >
                Horaires d'ouvertures
            </h2>

            <Box sx={{ textAlign: "center" }}>
                <Box>Lundi: 8h30 - 18h00</Box>
                <Box>Mardi: 8h30 - 18h00</Box>
                <Box>Mercredi: 8h30 - 18h00</Box>
                <Box>Jeudi: 8h30 - 18h00</Box>
                <Box>Vendredi: 8h30 - 18h00</Box>
            </Box>
        </Box>
    )
}
