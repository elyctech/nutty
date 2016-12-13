import Project  from "./project";

interface NuttyService
{
  createProject(description: string): Project;
}

export default NuttyService;
