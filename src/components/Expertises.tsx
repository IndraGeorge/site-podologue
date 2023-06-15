import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import pedicure from "../assets/pedicure.svg"
import semelles from "../assets/semelles.svg"
import picture1 from "../assets/piedmalade.png"
import picture2 from "../assets/piedmalade2.png"
import picture3 from "../assets/piedguerri.png"
import data from "../data.json"
import { styled, Typography } from "@mui/material"

export function Expertises() {

    const Information = styled(Box)({
        borderRadius: "5px",
        backgroundColor: "#1A6AB1",
        textAlign: "left",
        marginTop: "50px",
    })

    const Paragraphe = styled(Typography)({
        fontSize: "18px",
        textAlign: "left",
        marginTop: "30px"
    })

    return (
        <Box id="expertises" sx={{
            marginTop: "100px",
            paddingLeft: "20px",
            paddingRight: "20px",
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

                <Paragraphe
                >
                    {data.map(data => data.desciptionPedicure)}
                </Paragraphe>
            </Box>

            <Box sx={{ textAlign: "center", marginTop: "100px" }}>
                <img src={semelles} alt="pied" style={{ width: "100px", borderRadius: "100%" }} />

                <Paragraphe
                >
                    {data.map(data => data.descriptionSemelle)}
                </Paragraphe>
            </Box>

            <Information >
                <p style={{
                    color: "#fff",
                    fontSize: "18px",
                    padding: "20px"
                }}
                >
                    {data.map(data => data.orthonyxies)}
                </p>
            </Information>

            <Box
                style={{
                    marginTop: "80px",
                    padding: "20px",
                    maxWidth: "1100px"
                }}
            >
                <Grid flexDirection="column"
                    style={{ textAlign: "center", marginBottom: "50px" }}
                >
                    <img src={picture1} style={{ borderRadius: "5px", height: "150px" }} alt="ongle traumatisé" />
                    <Typography style={{
                        fontSize: "17px",
                        textAlign: "left",
                        marginTop: "20px",
                    }}
                    >
                        {data.map(data => data.avant)}
                    </Typography>
                </Grid>

                <Grid flexDirection="column"
                    style={{ textAlign: "center", maxWidth: "100%" }}
                >
                    <Grid flexDirection="row">
                        <img src={picture2} style={{ borderRadius: "5px 0 0 5px", height: "150px" }} alt="ongle traumatisé" />
                        <img src={picture3} style={{ borderRadius: "0 5px 5px 0 ", height: "150px" }} alt="Onychoplastie" />
                    </Grid>

                    <Typography style={{
                        fontSize: "17px",
                        textAlign: "left",
                        marginTop: "20px"
                    }}
                    >
                        {data.map(data => data.après)}
                    </Typography>
                </Grid>
            </Box>

            <Information>

                <p style={{
                    color: "#fff",
                    fontSize: "18px",
                    padding: "20px"
                }}
                >
                    {data.map(data => data.orthoplastie)}
                </p>
            </Information>
        </Box >
    )
}
