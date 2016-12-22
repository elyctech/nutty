import StandardUserStory  from "../../../standard/project/user_story";
import UserStory          from "../../../project/user_story";
import UserStoryBuilder   from "../../../project/user_story/builder";

class StandardUserStoryBuilder implements UserStoryBuilder
{
  private description: string;

  getUserStory(): UserStory
  {
    if (this.description.length === 0)
    {
      throw new TypeError("Description cannot be empty");
    }

    return new StandardUserStory(this.description);
  }

  setDescription(description: string): UserStoryBuilder
  {
    this.description = description;

    return this;
  }
}

export default StandardUserStoryBuilder;
