let Projects = [
  {
    "name": "SaladBind",
    "description": "Choose your Salad miner, algorithm and pool using a simple UI!",
    "id": "saladbind",
    "img": "/saladbind.png"
  }
];

export default function handler(req, res) {
  res.status(200).send(Projects)
}
export function getProject(name) {
  return Projects.find(project => project.id === name);
}

export function getProjects() {
  return Projects;
}
