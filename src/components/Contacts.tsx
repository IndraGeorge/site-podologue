import { Box, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery'

const paragrapheStyle = {
  textAlign: "center",
  marginBottom: "15px",
};

export function Contacts() {
  const matches = useMediaQuery('(max-width:1000px)')
  return (
    <Box
      id="contacts"
      sx={{
        marginTop: "60px",
        border: "2px solid #EDE6E6",
        padding: "20px 10px 20px 10px",
        maxWidth: "1000px",
        borderRadius: "20px 20px 0 20px",
        marginInline: matches ? "20px" : "auto",
      }}
    >
      <Typography variant="h2" sx={{ textAlign: "center", marginBottom: "30px" }}>
        Contacts
      </Typography>
      <Typography sx={paragrapheStyle}>
        <b>Prise de rendez-vous en ligne:</b>{" "}
        <a
          href="https://www.docrendezvous.fr/podologue/remire-montjoly/valamba-marine"
          target="_blank"
        >
          https://www.docrendezvous.fr/podologue/remire-montjoly/valamba-marine
        </a>
      </Typography>
      <Typography sx={paragrapheStyle}>
        <b>Adresse :</b> 39 avenue Saint-Ange Méthon 97
        354, Rémire-Montjoly
      </Typography>
      <Typography sx={paragrapheStyle}>
        {" "}
        <b>Téléphone :</b> 05 94 39 69 83{" "}
      </Typography>
      <Typography sx={paragrapheStyle}>
        <b>Paiements :</b> espèces / carte bleue
      </Typography>
    </Box>
  );
}

