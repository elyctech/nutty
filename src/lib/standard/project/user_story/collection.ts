import UserStory                      from "../../../project/user_story";
import UserStoryCollection            from "../../../project/user_story/collection";

class StandardUserStoryCollection implements UserStoryCollection
{
  private userStories: Array<UserStory>;

  constructor()
  {
    this.userStories = new Array<UserStory>();
  }

  addUserStory(userStory: UserStory): void
  {
    this.userStories.push(userStory);
  }

  contains(userStory: UserStory): boolean
  {
    return this.userStories.includes(userStory);
  }
}

export default StandardUserStoryCollection;
