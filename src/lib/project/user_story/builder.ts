import UserStory  from "../user_story";

interface UserStoryBuilder
{
  getUserStory(): UserStory;

  setDescription(description: string): UserStoryBuilder;
}

export default UserStoryBuilder;
