import AcceptanceCriterionCollectionFactory from "../../project/user_story/acceptance_criterion/collection/factory";
import Project                              from "../../project";
import ProjectBuilder                       from "../../project/builder";
import StandardProject                      from "../project";
import UserStory                            from "../../project/user_story";
import UserStoryBuilderFactory              from "../../project/user_story/builder/factory";
import UserStoryCollection                  from "../../project/user_story/collection";
import UserStoryCollectionFactory           from "../../project/user_story/collection/factory";

class StandardProjectBuilder implements ProjectBuilder
{
  private description : string;
  private userStories : Array<UserStory>;

  constructor(
    private acceptanceCriterionCollectionFactory  : AcceptanceCriterionCollectionFactory,
    private userStoryBuilderFactory               : UserStoryBuilderFactory,
    private userStoryCollectionFactory            : UserStoryCollectionFactory
  ) {
    this.userStories = new Array<UserStory>();
  };

  addUserStory(userStory: UserStory): ProjectBuilder
  {
    this.userStories.push(userStory);

    return this;
  }

  getProject(): Project
  {
    let userStoryCollection : UserStoryCollection;

    if (this.description.length === 0)
    {
      throw new TypeError("Description cannot be empty");
    }

    userStoryCollection = this.userStoryCollectionFactory.construct();

    for (let userStory of this.userStories)
    {
      userStoryCollection.addUserStory(userStory);
    }

    return new StandardProject(this.description, userStoryCollection);
  }

  setDescription(description: string): ProjectBuilder
  {
    this.description = description;

    return this;
  }
}

export default StandardProjectBuilder;
