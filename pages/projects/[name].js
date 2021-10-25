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

export async function getServerSideProps({ params }) {
  let project = Projects.find(a => a.id === params.name);
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
