let Projects = [
  {
    "name": "None",
    "description": "Literally nothing",
    "id": "nothing",
    "img": "/favicon.ico",
    "link": "/"
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
