import { Stack, Typography } from "@mui/material";
import picture1 from "../assets/piedmalade.png";
import picture2 from "../assets/piedmalade2.png";
import picture3 from "../assets/piedguerri.png";
import Box from "@mui/material/Box";
import data from "../data.json";

export function Example() {
 
  const styleParagraphe = {
    textAlign: "left",
    marginTop: "20px"
  };

  return (
    <Box
      sx={{
        marginTop: "40px",
        padding: "20px",
        maxWidth: "1100px",
      }}
    >
      <Stack direction="column" textAlign="center" marginBottom="50px">
        <img
          loading="lazy"
          src={picture1}
          style={{ borderRadius: "5px", height: "150px", width: "112px" }}
          alt="ongle traumatisé"
        />
        {
          data.map((data,index)=>(
             <Typography key={`${data.avant}-${index}`} sx={styleParagraphe}>
              {data.avant}
             </Typography>
          ))
        }
      </Stack>

      <Stack direction="column" textAlign="center">
        <Stack direction="row">
          <img
            loading="lazy"
            src={picture2}
            style={{
              borderRadius: "5px 0 0 5px",
              height: "150px",
              width: "112px",
            }}
            alt="ongle traumatisé"
          />
          <img
            loading="lazy"
            src={picture3}
            style={{
              borderRadius: "0 5px 5px 0 ",
              height: "150px",
              width: "112px"
            }}
            alt="Onychoplastie"
          />
        </Stack>
        {
          data.map((data,index)=>(
             <Typography key={`${data.après}-${index}`} sx={styleParagraphe}>
              {data.après}
             </Typography>
          ))
        }
      </Stack>
    </Box>
  );
}
