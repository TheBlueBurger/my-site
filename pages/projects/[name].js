import Projects from "../../components/projects";
import Head from "next/head";

export default function Project({project}) {
  return <>
  <Head>
    <title>{project.name} - My projects</title>
  </Head>
    <p>{JSON.stringify(project)}</p>
  </>
}

export async function getStaticProps({ params }) {
  return {
    props: {
      project: Projects.find(a => a.id === params.name)
    }
  }
}

export async function getStaticPaths() {
    return {
        paths: Projects.map(a => ({
          params: {
            name: a.id
          }
        })),
        fallback: false
    }
}
