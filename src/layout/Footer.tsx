import Box from "@mui/material/Box"
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import useMediaQuery from '@mui/material/useMediaQuery'

export function Footer() {

    const matches = useMediaQuery('(min-width:480px)')

    return (
        <Box
            sx={{
                height: "auto",
                backgroundColor: "#031126",
                marginTop: "70px",
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                padding: "20px",
                justifyContent: matches ? "space-between" : "center"
            }}
        >
            <Box style={{ margin: "10px" }}>
                <p style={{ marginBottom: "15px" }} >
                    <a href="#" style={{
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "14px",
                    }}
                    >
                        Mention légales
                    </a>
                </p>
                <p style={{ color: "#fff", fontSize: "14px" }}>© 2023 Marine Valamba, tous droits réservés</p>
            </Box>

            <Box style={{ margin: "10px" }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <ArrowUpwardRoundedIcon
                    sx={{
                        fontSize: "40px",
                        borderRadius: "5px",
                        background: "#05285B",
                        cursor: "pointer"
                    }}
                />
            </Box>

        </Box>

    )
}
