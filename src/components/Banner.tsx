import image from "../assets/image.svg"
import useMediaQuery from '@mui/material/useMediaQuery'
import Stack from '@mui/material/Stack'


export function Banner() {

    const matches = useMediaQuery('(min-width:480px)')

    return (
        <Stack direction="row" alignItems="center" height="400px"
            sx={{
                background: `url(${image}) center / cover no-repeat`,
                position: "relative"
            }}>
            <h1
                style={{ fontSize: matches ? "54px" : "40px", color: "#fff", textAlign: "center" }}>
                Cabinet Pédicure Podologue
            </h1>
        </Stack>

    );
}
