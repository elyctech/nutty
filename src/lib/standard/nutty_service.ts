import AcceptanceCriterionCollection        from "../project/user_story/acceptance_criterion/collection";
import AcceptanceCriterionCollectionFactory from "../project/user_story/acceptance_criterion/collection/factory";
import NuttyService                         from "../nutty_service";
import Project                              from "../project";
import ProjectFactory                       from "../project/factory";
import StandardProject                      from "./project";
import StandardUserStory                    from "./project/user_story";
import StandardUserStoryBuilder             from "./project/user_story/builder";
import UserStory                            from "../project/user_story";
import UserStoryBuilder                     from "../project/user_story/builder";
import UserStoryFactory                     from "../project/user_story/factory";

class StandardNuttyService implements NuttyService
{
  constructor(
    private acceptanceCriterionCollectionFactory  : AcceptanceCriterionCollectionFactory,
    private projectFactory                        : ProjectFactory,
    private userStoryFactory                      : UserStoryFactory
  ) {

  }

  buildUserStory(): UserStoryBuilder
  {
    return new StandardUserStoryBuilder(this.acceptanceCriterionCollectionFactory);
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
