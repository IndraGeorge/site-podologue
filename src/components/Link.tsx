import useMediaQuery from '@mui/material/useMediaQuery'

interface ILink {
    href: string
    children: string
}

export function Link({ href, children }: ILink) {

    const matches = useMediaQuery('(min-width:480px)')

    return (
        <>
            <a href={href}
                style={({
                    fontSize: matches ? "18px" : "16px",
                    display: "flex",
                    textDecoration: 'none',
                    color: "#fff"
                })}

            >
                {children}
            </a>
        </>
    )
}
