import AcceptanceCriterionCollection        from "../project/user_story/acceptance_criterion/collection";
import AcceptanceCriterionCollectionFactory from "../project/user_story/acceptance_criterion/collection/factory";
import NuttyService                         from "../nutty_service";
import Project                              from "../project";
import ProjectBuilder                       from "../project/builder";
import ProjectBuilderFactory                from "../project/builder/factory";
import ProjectFactory                       from "../project/factory";
import UserStory                            from "../project/user_story";
import UserStoryBuilder                     from "../project/user_story/builder";
import UserStoryBuilderFactory              from "../project/user_story/builder/factory";
import UserStoryFactory                     from "../project/user_story/factory";

class StandardNuttyService implements NuttyService
{
  constructor(
    private acceptanceCriterionCollectionFactory  : AcceptanceCriterionCollectionFactory,
    private projectBuilderFactory                 : ProjectBuilderFactory,
    private projectFactory                        : ProjectFactory,
    private userStoryBuilderFactory               : UserStoryBuilderFactory,
    private userStoryFactory                      : UserStoryFactory
  ) {

  }

  buildProject(): ProjectBuilder
  {
    return this.projectBuilderFactory.construct(this.acceptanceCriterionCollectionFactory);
  }

  buildUserStory(): UserStoryBuilder
  {
    return this.userStoryBuilderFactory.construct(this.acceptanceCriterionCollectionFactory);
  }

  createProject(description: string): Project
  {
    if (description.length === 0)
    {
      throw new TypeError("Description cannot be empty");
    }

    return this.projectFactory.construct(description);
  }

  createUserStory(description: string): UserStory
  {
    let acceptanceCriterionCollection: AcceptanceCriterionCollection;

    if (description.length === 0)
    {
      throw new TypeError("Description cannot be empty");
    }

    acceptanceCriterionCollection = this.acceptanceCriterionCollectionFactory.construct();

    return this.userStoryFactory.construct(acceptanceCriterionCollection, description);
  }
}

export default StandardNuttyService;
