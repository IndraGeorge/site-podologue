import Box from "@mui/material/Box"

export function Open() {
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
                    <p style={{ marginBottom: "8px" }}>Lundi:</p>
                    <p style={{ marginBottom: "8px" }}>Mardi:</p>
                    <p style={{ marginBottom: "8px" }}>Mercredi:</p>
                    <p style={{ marginBottom: "8px" }}>Jeudi:</p>
                    <p style={{ marginBottom: "8px" }}>Vendredi:</p>
                </Box>
                <Box>
                    <p style={{ marginBottom: "8px" }}>8h30 - 18h00</p>
                    <p style={{ marginBottom: "8px" }}>8h30 - 18h00</p>
                    <p style={{ marginBottom: "8px" }}>8h30 - 18h00</p>
                    <p style={{ marginBottom: "8px" }}>8h30 - 18h00</p>
                    <p style={{ marginBottom: "8px" }}>8h30 - 18h00</p>
                </Box>
            </Box>
            <Box sx={{ textAlign: "center", marginTop: "20px" }}>
                <p style={{ fontSize: "18px" }}>Fermé:</p>
                <p style={{ fontSize: "18px" }}>Samedi & Dimanche</p>
            </Box>
        </Box>
    );
}
