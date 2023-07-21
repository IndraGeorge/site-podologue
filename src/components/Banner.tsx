import Stack from "@mui/material/Stack";
import image from "../assets/image.jpg";

export function Banner() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      height="400px"
      width="100%"
      sx={{
        background: `url(${image}) bottom / cover no-repeat`,
        position: "relative",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 style={{ color: "#fff", textAlign: "center" }}>
        Cabinet Pédicure Podologue
      </h1>
    </Stack>
  );
}
