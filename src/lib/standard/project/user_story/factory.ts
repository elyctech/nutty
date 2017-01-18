import AcceptanceCriterionCollection  from "./acceptance_criterion/collection";
import StandardUserStory              from "../user_story";
import UserStory                      from "../../../project/user_story";
import UserStoryFactory               from "../../../project/user_story/factory";

class StandardUserStoryFactory implements UserStoryFactory
{
  construct(acceptanceCriteria: AcceptanceCriterionCollection, description: string): UserStory
  {
    return new StandardUserStory(acceptanceCriteria, description);
  }
}

export default StandardUserStoryFactory;
