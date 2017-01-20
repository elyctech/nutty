import AcceptanceCriterionCollectionFactory from "../../project/user_story/acceptance_criterion/collection/factory";
import Project                              from "../../project";
import ProjectBuilder                       from "../../project/builder";
import StandardProject                      from "../project";

class StandardProjectBuilder implements ProjectBuilder
{
  private description: string;

  constructor(
    private acceptanceCriterionCollectionFactory  : AcceptanceCriterionCollectionFactory
  ) {

  }

  getProject(): Project
  {
    if (this.description.length === 0)
    {
      throw new TypeError("Description cannot be empty");
    }

    return new StandardProject(this.description);
  }

  setDescription(description: string): ProjectBuilder
  {
    this.description = description;

    return this;
  }
}

export default StandardProjectBuilder;
