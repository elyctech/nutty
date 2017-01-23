import Project              from "../project";
import UserStory            from "../project/user_story";
import UserStoryCollection  from "../project/user_story/collection";

class StandardProject implements Project
{
  constructor(
    private description : string,
    private userStories : UserStoryCollection
  ) {

  }

  addUserStory(userStory: UserStory): void
  {
    this.userStories.addUserStory(userStory);
  }

  getUserStories(): UserStoryCollection
  {
    return this.userStories;
  }

  getDescription(): string
  {
    return this.description;
  }
}

export default StandardProject;
