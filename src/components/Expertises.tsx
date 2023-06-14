import Box from "@mui/material/Box"
import pedicure from "../assets/pedicure.svg"
import semelles from "../assets/semelles.svg"
import picture1 from "../assets/piedmalade.png"
import picture2 from "../assets/piedmalade2.png"
import picture3 from "../assets/piedguerri.png"
import data from "../data.json"

export function Expertises() {
    return (
        <Box id="expertises" sx={{
            marginTop: "80px",
            marginLeft: "60px",
            marginRight: "60px"
        }}
        >
            <Box sx={{ textAlign: "center" }}>
                <img src={pedicure} alt="pied" style={{ width: "100px", borderRadius: "100%" }} />

                <p style={{
                    color: "#1E1E1E",
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
                    color: "#1E1E1E",
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

            <Box sx={{
                borderRadius: "5px",
                backgroundColor: "#EDE6E6",
                marginTop: "80px",
                display: "flex",
                alignItems: "center",
                padding: "30px"
            }}
            >
                <Box style={{
                    display: "flex",
                    alignItems: "center",
                }}
                >
                    <img src={picture1} style={{ borderRadius: "5px", height: "150px" }} alt="ongle traumatisé" />
                    <p style={{
                        fontSize: "17px",
                        textAlign: "justify",
                        padding: "10px",
                        width: "384px",
                        color: "#1E1E1E",
                    }}
                    >
                        {data.map(data => data.avant)}
                    </p>
                </Box>

                <Box
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Box style={{ display: "flex" }}>
                        <img src={picture2} style={{ borderRadius: "5px 0 0 5px", height: "150px" }} alt="ongle traumatisé" />
                        <img src={picture3} style={{ borderRadius: "0 5px 5px 0 ", height: "150px" }} alt="Onychoplastie" />
                    </Box>

                    <p style={{
                        color: "#1E1E1E",
                        fontSize: "17px",
                        textAlign: "justify",
                        padding: "10px",
                        width: "310px",
                    }}
                    >
                        {data.map(data => data.après)}
                    </p>
                </Box>
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
                    {data.map(data => data.orthoplastie)}
                </p>
            </Box>
        </Box >
    )
}
