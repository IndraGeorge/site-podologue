import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import pedicure from "../assets/pedicure.svg";
import semelles from "../assets/semelles.svg";
import data from "../data.json";
import { Example } from "./Example";

export function Expertises() {
  const styleParagraphe = {
    textAlign: "left",
    marginTop: "30px",
  };

  const styleInfo = {
    borderRadius: "5px",
    backgroundColor: "#1A6AB1",
    textAlign: "left",
    marginTop: "60px",
  };

  return (
    <Box
      id="expertises"
      sx={{
        marginTop: "40px",
        paddingLeft: "20px",
        paddingRight: "20px",
        maxWidth: "1200px",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        Expertises
      </Typography>

      <Box sx={{ textAlign: "center" }}>
        <img
          loading="lazy"
          src={pedicure}
          alt="pied"
          style={{ width: "100px", height: "100px", borderRadius: "100%" }}
        />
        {data.map((data, index) => (
          <Typography
            key={`${data.descriptionPedicure}-${index}`}
            sx={styleParagraphe}
          >
            {data.descriptionPedicure}
          </Typography>
        ))}
      </Box>

      <Box sx={{ textAlign: "center", marginTop: "50px" }}>
        <img
          loading="lazy"
          src={semelles}
          alt="pied"
          style={{ width: "100px", height: "100px", borderRadius: "100%" }}
        />
        {data.map((data, index) => (
          <Typography
            key={`${data.descriptionSemelles}-${index}`}
            sx={styleParagraphe}
          >
            {data.descriptionSemelles}
          </Typography>
        ))}
      </Box>

      <Box sx={styleInfo}>
        {data.map((data, index) => (
          <Typography
            key={`${data.orthonyxies}-${index}`}
            sx={{ color: "#fff", padding: "20px" }}
          >
            {data.orthonyxies}
          </Typography>
        ))}
      </Box>

      <Example />

      <Box sx={styleInfo}>
        {data.map((data, index) => (
          <Typography
            key={`${data.orthoplastie}-${index}`}
            sx={{ color: "#fff", padding: "20px" }}
          >
            {data.orthoplastie}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
