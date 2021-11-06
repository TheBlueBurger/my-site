import {getProject, getProjects} from "../api/projects";
import Head from "next/head";

export default function Project({project}) {
  return <>
  <Head>
    <title>{project?.name} - My projects</title>
  </Head>
    <p>{JSON.stringify(project)}</p>
  </>
}

export async function getStaticProps({ params }) {
  let project = getProject(params?.name)
  if(!project) return {
    redirect: {
      destination: "/projects",
      permanent: false
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
    paths: projects.map(project => ({params: {name: project}})),
    fallback: true
  }
}
