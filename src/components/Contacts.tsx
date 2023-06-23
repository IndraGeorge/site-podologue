import Box from "@mui/material/Box";
import { styled, Typography } from "@mui/material";

export function Contacts() {
  const Paragraphe = styled(Typography)({
    textAlign: "center",
    marginBottom: "15px",
  });

  return (
    <Box
      id="contacts"
      sx={{
        marginTop: "50px",
        border: "2px solid #EDE6E6",
        padding: "20px 0 20px 0",
        maxWidth: "1000px",
        borderRadius: "20px 20px 0 20px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Contacts</h2>
      <Paragraphe>
        <b>Rendez-vous en ligne:</b>{" "}
        <a
          href="https://www.docrendezvous.fr/podologue/remire-montjoly/valamba-marine"
          target="_blank"
        >
          https://www.docrendezvous.fr/podologue/remire-montjoly/valamba-marine
        </a>
      </Paragraphe>
      <Paragraphe>
        {" "}
        <b>Téléphone :</b> + 33 767 149 163{" "}
      </Paragraphe>
      <Paragraphe>
        <b>Paiements :</b> espèces / carte bleue
      </Paragraphe>
    </Box>
  );
}
