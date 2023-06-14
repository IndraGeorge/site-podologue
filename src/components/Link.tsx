import { NavLink } from "react-router-dom"

interface ILink {
    href: string
    children: string
}

export function Link({ href, children }: ILink) {

    return (
        <>
            <NavLink to={href}
                style={({ isActive }) => ({
                    fontSize: "18px",
                    margin: "20px",
                    color: "#fff",
                    textDecoration: 'none',
                    padding: "3px",
                    display: "block",
                    borderBottom: isActive ? "2px solid #fff" : "none"
                })}
            >
                {children}
            </NavLink >
        </>
    )
}
