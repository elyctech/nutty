import AcceptanceCriterion            from "../../project/user_story/acceptance_criterion";
import AcceptanceCriterionCollection  from "../../project/user_story/acceptance_criterion/collection";
import UserStory                      from "../../project/user_story";

class StandardUserStory implements UserStory
{
  constructor(private acceptanceCriteria: AcceptanceCriterionCollection, private description: string)
  {

  }

  addAcceptanceCriterion(acceptanceCriterion: AcceptanceCriterion): void
  {
    this.acceptanceCriteria.addAcceptanceCriterion(acceptanceCriterion);
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
