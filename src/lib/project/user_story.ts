import AcceptanceCriteronCollection from "./user_story/acceptance_criterion/collection";

interface UserStory
{
  getAcceptanceCriteria(): AcceptanceCriteronCollection;

  getDescription(): string;
}

export default UserStory;
