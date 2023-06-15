import Box from "@mui/material/Box"
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

export function Footer() {

    return (
        <Box sx={{
            height: "150px",
            backgroundColor: "#031126",
            marginTop: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        }}
        >
            <Box sx={{ marginLeft: "40px" }}>
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

            <Box sx={{ marginRight: "40px" }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <ArrowUpwardRoundedIcon
                    sx={{
                        fontSize: "50px",
                        borderRadius: "5px",
                        background: "#fff",
                        cursor: "pointer"
                    }}
                />
            </Box>

        </Box>

    )
}
