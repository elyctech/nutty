import AcceptanceCriterionCollectionFactory from "../../../project/user_story/acceptance_criterion/collection/factory";
import ProjectBuilder                       from "../../../project/builder";
import ProjectBuilderFactory                from "../../../project/builder/factory";
import StandardProjectBuilder               from "../builder";
import UserStoryBuilderFactory              from "../../../project/user_story/builder/factory";
import UserStoryCollectionFactory           from "../../../project/user_story/collection/factory";

class StandardProjectBuilderFactory implements ProjectBuilderFactory
{
  construct(
    acceptanceCriterionCollectionFactory  : AcceptanceCriterionCollectionFactory,
    userStoryBuilderFactory               : UserStoryBuilderFactory,
    userStoryCollectionFactory            : UserStoryCollectionFactory
  ): ProjectBuilder
  {
    return new StandardProjectBuilder(acceptanceCriterionCollectionFactory, userStoryBuilderFactory, userStoryCollectionFactory);
  }
}

export default StandardProjectBuilderFactory;
