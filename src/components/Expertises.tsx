import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import pedicure from "../assets/pedicure.svg";
import semelles from "../assets/semelles.svg";
import data from "../data.json";
import { Example } from "./Example";

export function Expertises() {
  const pedicureDescription = data.map((data) => data.desciptionPedicure);
  const descriptionSemelle = data.map((data) => data.descriptionSemelle);
  const orthonyxies = data.map((data) => data.orthonyxies);
  const orthoplastie = data.map((data) => data.orthoplastie);

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
      <h2
        style={{
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        Expertises
      </h2>

      <Box sx={{ textAlign: "center" }}>
        <img
          loading="lazy"
          src={pedicure}
          alt="pied"
          style={{ width: "100px", height: "100px", borderRadius: "100%" }}
        />

        <Typography sx={styleParagraphe}>{pedicureDescription}</Typography>
      </Box>

      <Box sx={{ textAlign: "center", marginTop: "50px" }}>
        <img
          loading="lazy"
          src={semelles}
          alt="pied"
          style={{ width: "100px", height: "100px", borderRadius: "100%" }}
        />

        <Typography sx={styleParagraphe}>{descriptionSemelle}</Typography>
      </Box>

      <Box sx={styleInfo}>
        <p
          style={{
            color: "#fff",
            padding: "20px",
          }}
        >
          {orthonyxies}
        </p>
      </Box>

      <Example />

      <Box sx={styleInfo}>
        <p
          style={{
            color: "#fff",
            padding: "20px",
          }}
        >
          {orthoplastie}
        </p>
      </Box>
    </Box>
  );
}
