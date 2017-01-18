import Project  from "../project";

interface ProjectFactory
{
  construct(description: string): Project;
}

export default ProjectFactory;
