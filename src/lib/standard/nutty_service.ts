import NuttyService from "../nutty_service";
import Project      from "../project";

import StandardProject  from "./project";

class StandardNuttyService implements NuttyService
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

export default StandardNuttyService;
