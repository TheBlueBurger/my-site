import styles from "../../styles/Projects.module.css"
import Link from "next/link";
import Image from "next/image"
import ProjectList from "../../components/projects"
export default function Projects() {
    return (<>
        {ProjectList.map(project => {
            return (
                <Link href={"/projects/" + project.id} key={project.id}>
                    <a>
                        <div className={styles.card}>
                            {project.name}
                            <Image width="40px" height="40px" src={project.img} className={styles.Image}></Image>
                        </div>
                    </a>
                </Link>
            )
        })}
    </>)
}