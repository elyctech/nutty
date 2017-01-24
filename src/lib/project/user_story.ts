import AcceptanceCriterion           from "./user_story/acceptance_criterion";
import AcceptanceCriterionCollection from "./user_story/acceptance_criterion/collection";

interface UserStory
{
  addAcceptanceCriterion(acceptanceCriterion: AcceptanceCriterion): void;

  getAcceptanceCriteria(): AcceptanceCriterionCollection;

  getDescription(): string;
}

export default UserStory;
