import Stack from "@mui/material/Stack";
import image from "../assets/image.svg";

export function Banner() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      height="400px"
      sx={{
        background: `url(${image}) center / cover no-repeat`,
        position: "relative",
      }}
    >
      <h1 style={{ color: "#fff", textAlign: "center" }}>
        Cabinet Pédicure Podologue
      </h1>
    </Stack>
  );
}
