import { styled } from "@mui/material";
import { Box, Typography } from "@mui/material";

export function Open() {
  const DaysAndHours = styled(Typography)({
    marginBottom: "8px",
  });

  return (
    <Box
      id="horaires"
      sx={{
        marginTop: "60px",
        backgroundColor: "#EDE6E6",
        padding: "30px 0 30px 0",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        Horaires d'ouvertures
      </Typography>
      <Box sx={{ display: "flex", width: "250px" }}>
        <Box>
          <DaysAndHours>Lundi:</DaysAndHours>
          <DaysAndHours>Mardi:</DaysAndHours>
          <DaysAndHours>Mercredi:</DaysAndHours>
          <DaysAndHours>Jeudi:</DaysAndHours>
          <DaysAndHours>Vendredi:</DaysAndHours>
        </Box>
        <Box>
          <DaysAndHours>8h30 - 18h00</DaysAndHours>
          <DaysAndHours>8h30 - 18h00</DaysAndHours>
          <DaysAndHours>8h30 - 18h00</DaysAndHours>
          <DaysAndHours>8h30 - 18h00</DaysAndHours>
          <DaysAndHours>8h30 - 18h00</DaysAndHours>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <Typography>Fermé:</Typography>
        <Typography>Samedi & Dimanche</Typography>
      </Box>
    </Box>
  );
}
