import Project  from "../project";

interface ProjectService
{
  createProject(description: string): Project;
}

export default ProjectService;
