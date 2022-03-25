import styles from "../../styles/Projects.module.css"
import Link from "next/link";
import Image from "next/image"
import Head from "next/head";
import {getProjects} from "../api/projects";
export default function Projects() {
  let ProjectList = getProjects();
    return (<>
      <Head>
        <title>My projects</title>
      </Head>
        /*{ProjectList.map(project => {
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
        })}*/
            <p>Work in progress</p>
            <p>Totally not because I have nothing to add here</p>
    </>)
}
