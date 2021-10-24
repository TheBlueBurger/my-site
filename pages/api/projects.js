import Projects from "../../components/projects"

export default function handler(req, res) {
  res.status(200).send(Projects)
}
