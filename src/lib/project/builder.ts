import Project    from "../project";

interface ProjectBuilder
{
  getProject(): Project;

  setDescription(description: string): ProjectBuilder;
}

export default ProjectBuilder;
