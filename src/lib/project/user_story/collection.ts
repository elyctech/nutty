import UserStory  from "../user_story";

interface UserStoryCollection
{
  addUserStory(userStory: UserStory): void;

  contains(userStory: UserStory): boolean;
}

export default UserStoryCollection;
