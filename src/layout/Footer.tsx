import Box from "@mui/material/Box"
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

export function Footer() {

    return (
        <Box
            sx={{
                height: "auto",
                backgroundColor: "#031126",
                marginTop: "100px",
                display: "flex",
                gap: "15px",
                alignItems: "center",
                flexWrap: "wrap",
                padding: "20px",
                justifyContent: "space-around"
            }}
        >
            <Box>
                <p style={{ marginBottom: "15px" }} >
                    <a href="#" style={{
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "16px",
                    }}
                    >
                        Mention légales
                    </a>
                </p>
                <p style={{ color: "#fff", fontSize: "16px" }}>© 2023 Marine Valamba, tous droits réservés</p>
            </Box>

            <Box onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <ArrowUpwardRoundedIcon
                    sx={{
                        fontSize: "45px",
                        borderRadius: "5px",
                        background: "#265D97",
                        cursor: "pointer"
                    }}
                />
            </Box>

        </Box>

    )
}
