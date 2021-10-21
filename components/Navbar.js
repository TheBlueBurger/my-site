import NavbarButton from "./NavBarButton"

export default function Navbar() {
    return (
        <>
            {navBarItems.map(item => <NavbarButton href={item.href} name={item.name} key={item.name}></NavbarButton>)}
        </>
    )
}
let navBarItems = [
    {
        "name": "Home",
        "href": "/"
    },
    {
        "name": "Projects",
        "href": "/projects"
    }
]