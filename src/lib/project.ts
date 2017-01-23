import UserStory            from "./project/user_story";
import UserStoryCollection  from "./project/user_story/collection";

interface Project
{
  addUserStory(userStory: UserStory): void;

  getDescription(): string;

  getUserStories(): UserStoryCollection;
}

export default Project;
