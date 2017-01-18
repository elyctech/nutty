import AcceptanceCriterionCollectionFactory from "../../../../project/user_story/acceptance_criterion/collection/factory";
import StandardUserStoryBuilder             from "../builder";
import UserStoryBuilder                     from "../../../../project/user_story/builder";
import UserStoryBuilderFactory              from "../../../../project/user_story/builder/factory";

class StandardUserStoryBuilderFactory implements UserStoryBuilderFactory
{
  construct(acceptanceCriterionCollectionFactory: AcceptanceCriterionCollectionFactory): UserStoryBuilder
  {
    return new StandardUserStoryBuilder(acceptanceCriterionCollectionFactory);
  }
}

export default StandardUserStoryBuilderFactory;
