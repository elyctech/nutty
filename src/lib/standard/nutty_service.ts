import AcceptanceCriterionCollection        from "../project/user_story/acceptance_criterion/collection";
import AcceptanceCriterionCollectionFactory from "../project/user_story/acceptance_criterion/collection/factory";
import NuttyService                         from "../nutty_service";
import Project                              from "../project";
import StandardProject                      from "./project";
import StandardUserStory                    from "./project/user_story";
import StandardUserStoryBuilder             from "./project/user_story/builder";
import UserStory                            from "../project/user_story";
import UserStoryBuilder                     from "../project/user_story/builder";

class StandardNuttyService implements NuttyService
{
  constructor(private acceptanceCriterionCollectionFactory: AcceptanceCriterionCollectionFactory)
  {

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

    // TODO Factory
    return new StandardProject(description);
  }

  createUserStory(description: string): UserStory
  {
    let acceptanceCriterionCollection: AcceptanceCriterionCollection;

    if (description.length === 0)
    {
      throw new TypeError("Description cannot be empty");
    }

    acceptanceCriterionCollection = this.acceptanceCriterionCollectionFactory.construct();

    // TODO Factory
    return new StandardUserStory(acceptanceCriterionCollection, description);
  }
}

export default StandardNuttyService;
