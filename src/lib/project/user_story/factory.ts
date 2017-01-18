import AcceptanceCriterionCollection  from "./acceptance_criterion/collection";
import UserStory                      from "../user_story";

interface UserStoryFactory
{
  construct(acceptanceCriteria: AcceptanceCriterionCollection, description: string): UserStory;
}

export default UserStoryFactory;
