import AcceptanceCriterionCollectionFactory from "../user_story/acceptance_criterion/collection/factory";
import ProjectBuilder                       from "../builder";
import UserStoryBuilderFactory              from "../user_story/builder/factory";
import UserStoryCollectionFactory           from "../user_story/collection/factory";

interface ProjectBuilderFactory
{
  construct(
    acceptanceCriterionCollectionFactory  : AcceptanceCriterionCollectionFactory,
    userStoryBuilderFactory               : UserStoryBuilderFactory,
    userStoryCollectionFactory            : UserStoryCollectionFactory
  ): ProjectBuilder;
}

export default ProjectBuilderFactory;
