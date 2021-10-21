import Projects from "../../components/projects";

export async function getStaticProps({ params }) {
    return {
        props: {
            project: Projects.find(a => a.id == params.name)
        }
    }
}

export default function Project({project}) {
    return <p>{JSON.stringify(project)}</p>
}

export async function getStaticPaths() {
    return {
        paths: Projects.map(a => ({params: {name: a.id}})),
        fallback: false
    }
}