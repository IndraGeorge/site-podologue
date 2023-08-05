import Stack from "@mui/material/Stack";
import image from "../assets/image.jpg";
import imageM from "../assets/image_m.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";

export function Banner() {
  const matches = useMediaQuery("(min-width:480px)");

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
          backgroundImage: matches ? `url(${image})` : `url(${imageM})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
          backgroundPosition: "center",
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
