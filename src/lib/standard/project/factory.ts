import Project          from "../../project";
import ProjectFactory   from "../../project/factory";
import StandardProject  from "../project";

class StandardProjectFactory implements ProjectFactory
{
  construct(description: string): Project
  {
    return new StandardProject(description);
  }
}

export default StandardProjectFactory;
