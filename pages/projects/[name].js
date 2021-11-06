import { getProject, getProjects } from "../api/projects";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Project.module.css";

export default function Project({ project }) {
  return <>
    <Head>
      <title>{project?.name} - My projects</title>
    </Head>
    {project && <>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      {project.link && <div className={styles.Link}>
        <Link href={project.link}><a>Download</a></Link>
      </div>}
    </>}
    {!project && <>Project not found????????? This should never happen</>}
  </>
}

export async function getStaticProps({ params }) {
  let project = getProject(params?.name);
  if (!project) {
    return {
      redirect: {
        destination: '/projects',
        permanent: true,
      },
    }
  }
  return {
    props: {
      project: project
    }
  }
}

export async function getStaticPaths() {
  let projects = getProjects().map(project => project.id);
  return {
    paths: projects.map(project => ({ params: { name: project } })),
    fallback: true
  }
}
