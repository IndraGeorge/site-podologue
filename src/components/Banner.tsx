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
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          zIndex: -1,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
        }}
      />
      <h1
        style={{
          color: "#fff",
          textAlign: "center",
        }}
      >
        Cabinet Pédicure Podologue
      </h1>
    </Stack>
  );
}
