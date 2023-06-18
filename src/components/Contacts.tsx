import Box from "@mui/material/Box"
import data from "../data.json"
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, Typography } from "@mui/material"

export function Contacts() {

    const matches = useMediaQuery('(min-width:480px)')

    const Paragraphe = styled(Typography)({
        textAlign: "center",
        marginBottom: "15px",
        fontFamily: "Montserrat"
    })

    return (
        <Box id="contacts" sx={{
            marginTop: "50px",
            border: "2px solid #EDE6E6",
            padding: "20px 0 20px 0",
            maxWidth: "1000px",
            borderRadius: "20px 20px 0 20px"
        }}
        >
            <h2 style={{
                textAlign: "center",
                marginBottom: "30px",
                fontSize: matches ? "32px" : "28px"
            }} >
                Contacts
            </h2>
            <Paragraphe>
                <b>Rendez-vous en ligne:</b> <a href="https://www.docrendezvous.fr/podologue/remire-montjoly/valamba-marine"
                    target="_blank"
                >
                    {data.map(data => data.booking)}
                </a>
            </Paragraphe>
            <Paragraphe>
                <b>Téléphone :</b> {data.map(data => data.phone)}
            </Paragraphe>
            <Paragraphe>
                <b>Paiements :</b> {data.map(data => data.payments)}
            </Paragraphe>

        </Box>
    )
}

