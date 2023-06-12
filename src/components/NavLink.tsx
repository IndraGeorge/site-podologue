
interface ILink {
    href: string
    currentPath: string
    children: string
}

export function NavLink({ href, children, currentPath }: ILink) {

    const isActive = currentPath === href

    return (
        <>
            <a href={href}
                style={{
                    margin: "20px", fontSize: "18px",
                    color: "#fff",
                    textDecoration: 'none',
                    borderBottom: isActive ? '2px solid #fff' : 'none',
                    padding: "3px"
                }}
            >
                {children}
            </a>
        </>
    )
}
