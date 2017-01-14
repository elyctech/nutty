import AcceptanceCriterion  from "./acceptance_criterion";
import UserStory            from "../user_story";

interface UserStoryBuilder
{
  addAcceptanceCriterion(acceptanceCriterion: AcceptanceCriterion): UserStoryBuilder;

  getUserStory(): UserStory;

  setDescription(description: string): UserStoryBuilder;
}

export default UserStoryBuilder;
