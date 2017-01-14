import AcceptanceCriterionCollection  from "../../project/user_story/acceptance_criterion/collection";
import UserStory                      from "../../project/user_story";

class StandardUserStory implements UserStory
{
  constructor(private acceptanceCriteria: AcceptanceCriterionCollection, private description: string)
  {

  }

  getAcceptanceCriteria(): AcceptanceCriterionCollection
  {
    return this.acceptanceCriteria;
  }

  getDescription(): string
  {
    return this.description;
  }
}

export default StandardUserStory;
