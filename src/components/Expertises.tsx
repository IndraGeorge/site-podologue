import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import pedicure from "../assets/pedicure.svg"
import semelles from "../assets/semelles.svg"
import picture1 from "../assets/piedmalade.png"
import picture2 from "../assets/piedmalade2.png"
import picture3 from "../assets/piedguerri.png"
import data from "../data.json"

export function Expertises() {
    return (
        <Box id="expertises" sx={{
            marginTop: "100px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "30px",
            paddingRight: "30px",
            maxWidth: "1200px"
        }}
        >
            <h2 style={{
                textAlign: "center",
                marginBottom: "50px",
                fontSize: "32px"
            }}
            >
                Expertises
            </h2>

            <Box sx={{ textAlign: "center" }}>
                <img src={pedicure} alt="pied" style={{ width: "100px", borderRadius: "100%" }} />

                <p style={{
                    fontSize: "18px",
                    textAlign: "justify",
                    marginTop: "30px"
                }}
                >
                    {data.map(data => data.desciptionPedicure)}
                </p>
            </Box>

            <Box sx={{ textAlign: "center", marginTop: "100px" }}>
                <img src={semelles} alt="pied" style={{ width: "100px", borderRadius: "100%" }} />

                <p style={{
                    fontSize: "18px",
                    textAlign: "justify",
                    marginTop: "30px"
                }}
                >
                    {data.map(data => data.descriptionSemelle)}
                </p>
            </Box>

            <Box sx={{
                borderRadius: "5px",
                backgroundColor: "#1A6AB1",
                textAlign: "center",
                marginTop: "80px",
            }}
            >
                <p style={{
                    color: "#fff",
                    fontSize: "18px",
                    textAlign: "justify",
                    padding: "20px"
                }}
                >
                    {data.map(data => data.orthonyxies)}
                </p>
            </Box>

            <Grid container flexDirection="row"
                style={{
                    marginTop: "80px",
                    padding: "20px",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                    maxWidth: "1100px"
                }}
            >
                <Grid xs={12} sm={6} md={4} lg={3} flexDirection="column"
                    style={{ textAlign: "center" }}
                >
                    <img src={picture1} style={{ borderRadius: "5px", height: "150px" }} alt="ongle traumatisé" />
                    <p style={{
                        fontSize: "17px",
                        textAlign: "justify"
                    }}
                    >
                        {data.map(data => data.avant)}
                    </p>
                </Grid>

                <Grid xs={12} sm={6} md={4} lg={3} flexDirection="column"
                    style={{ textAlign: "center" }}
                >
                    <Grid flexDirection="row">
                        <img src={picture2} style={{ borderRadius: "5px 0 0 5px", height: "150px" }} alt="ongle traumatisé" />
                        <img src={picture3} style={{ borderRadius: "0 5px 5px 0 ", height: "150px" }} alt="Onychoplastie" />
                    </Grid>

                    <p style={{
                        fontSize: "17px",
                        textAlign: "justify",

                    }}
                    >
                        {data.map(data => data.après)}
                    </p>
                </Grid>
            </Grid>

            <Box sx={{
                borderRadius: "5px",
                backgroundColor: "#1A6AB1",
                textAlign: "center",
                marginTop: "80px",
            }}
            >
                <p style={{
                    color: "#fff",
                    fontSize: "18px",
                    textAlign: "justify",
                    padding: "20px"
                }}
                >
                    {data.map(data => data.orthoplastie)}
                </p>
            </Box>
        </Box >
    )
}
