import Box from "@mui/material/Box";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

export function Footer() {
  const matches = useMediaQuery("(min-width:480px)");
  const currentDate = new Date();

  return (
    <Stack
      direction="row"
      alignItems="center"
      flexWrap="wrap"
      height="auto"
      padding="20px"
      marginTop="70px"
      sx={{
        backgroundColor: "#031126",
        justifyContent: matches ? "space-between" : "center",
      }}
    >
      <Box sx={{ margin: "10px" }}>
        <p style={{ marginBottom: "15px" }}>
          <Link
            to="/mention"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Mention légales
          </Link>
        </p>
        <p style={{ color: "#fff", fontSize: "14px" }}>
          © {currentDate.getFullYear()} Marine Valamba, tous droits réservés
        </p>
      </Box>

      <Box
        sx={{ margin: "10px" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUpwardRoundedIcon
          sx={{
            fontSize: "40px",
            borderRadius: "5px",
            background: "#0c3f6d",
            cursor: "pointer",
          }}
        />
      </Box>
    </Stack>
  );
}
