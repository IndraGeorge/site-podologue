import { Box, Typography } from "@mui/material";

const paragrapheStyle = {
  textAlign: "center",
  marginBottom: "15px",
};

export function Contacts() {
  return (
    <Box
      id="contacts"
      sx={{
        marginTop: "60px",
        border: "2px solid #EDE6E6",
        padding: "20px 0 20px 0",
        maxWidth: "1000px",
        borderRadius: "20px 20px 0 20px",
      }}
    >
      <Typography variant="h2" sx={{ textAlign: "center", marginBottom: "30px" }}>
        Contacts
      </Typography>
      <Typography sx={paragrapheStyle}>
        <b>Rendez-vous en ligne:</b>{" "}
        <a
          href="https://www.docrendezvous.fr/podologue/remire-montjoly/valamba-marine"
          target="_blank"
        >
          https://www.docrendezvous.fr/podologue/remire-montjoly/valamba-marine
        </a>
      </Typography>
      <Typography sx={paragrapheStyle}>
        {" "}
        <b>Téléphone :</b> + 33 767 149 163{" "}
      </Typography>
      <Typography sx={paragrapheStyle}>
        <b>Paiements :</b> espèces / carte bleue
      </Typography>
    </Box>
  );
}

