interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
  repository: string;
  deployment: string;
  tags: string[];
  tools: string[];
}

export default IProject;
