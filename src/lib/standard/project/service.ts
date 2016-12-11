import Project          from "../../project";
import ProjectService   from "../../project/service";

import StandardProject  from "../project";

class StandardProjectService implements ProjectService
{
  createProject(description: string): Project
  {
    if (description.length === 0)
    {
      throw new TypeError("Description cannot be empty");
    }

    return new StandardProject(description);
  }
}

export default StandardProjectService;
