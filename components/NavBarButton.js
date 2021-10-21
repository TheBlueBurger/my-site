import Link from "next/link";
import { useRouter } from "next/router"
import NavBarStyles from "../styles/NavBar.module.css";

export default function NavbarButton({ href, name }) {
    const router = useRouter();
    return (
        <div className={NavBarStyles.button + " " + (router.pathname == href ? NavBarStyles.Active : "")}>
            <Link href={href}>
                <a>{name}</a>
            </Link>
        </div>
    )
}