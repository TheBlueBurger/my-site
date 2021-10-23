import styles from "../../styles/Projects.module.css"
import Link from "next/link";
import Image from "next/image"
import ProjectList from "../../components/projects"
import Head from "next/head";
export default function Projects() {
    return (<>
      <Head>
        <title>My projects</title>
      </Head>
        {ProjectList.map(project => {
            return (
                <Link href={"/projects/" + project.id} key={project.id}>
                    <a>
                        <div className={styles.card}>
                            {project.name}
                            <Image width="40px" height="40px" src={project.img} className={styles.Image} alt={project.name + " icon"} />
                        </div>
                    </a>
                </Link>
            )
        })}
    </>)
}
