import {Box, Typography} from "@mui/material"

export function LegalMentions() {

    return (
        <Box sx={{
            minHeight: "100vh",
            paddingLeft: "20px",
            paddingRight: "20px",
            maxWidth: "1200px"
        }}>
            <Box sx={{ marginTop: "50px" }}>
                <h2 style={{ marginBottom: "40px" }}>
                    Raison sociale et siège social
                </h2>
                <p><b>MADAME MARINE VALAMBA</b></p><br />
                <p><b>Adresse :</b> 14 RUE DU PERE GROS - 97354 REMIRE-MONTJOLY</p>
                <p><b>État :</b> Actif depuis moins d'1 an</p>
                <p>Depuis le :29-10-2022</p>
                <p><b>SIRET : </b>91958564600020</p>
                <p><b>Activité :</b> Activités des professionnels de la rééducation, de l'appareillage et des pédicures-podologues (8690E)</p>
            </Box>
            <Box sx={{ marginTop: "50px" }} >
                <Typography variant="h2" sx={{ marginBottom: "40px" }} >
                    Hébergeur du site
                </Typography>
                <p><b>FIREBASE</b></p><br />
                <p><b>Raison sociale:</b> Alphabet Inc. Google</p>
                <p><b>Adresse:</b> 1600 Amphitheatre Parkway CA 94043 Mountain View, California</p>
            </Box>
        </Box>
    )
}
