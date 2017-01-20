import AcceptanceCriterionCollectionFactory from "../user_story/acceptance_criterion/collection/factory";
import ProjectBuilder                       from "../builder";

interface ProjectBuilderFactory
{
  construct(
    acceptanceCriterionCollectionFactory  : AcceptanceCriterionCollectionFactory
  ): ProjectBuilder;
}

export default ProjectBuilderFactory;
