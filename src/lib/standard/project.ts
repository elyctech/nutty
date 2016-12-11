import Project  from "../project";

class StandardProject implements Project
{
  constructor(private description: string)
  {

  }

  getDescription(): string
  {
    return this.description;
  }
}

export default StandardProject;
