import AcceptanceCriterionCollectionFactory from "../../../project/user_story/acceptance_criterion/collection/factory";
import ProjectBuilder                       from "../../../project/builder";
import ProjectBuilderFactory                from "../../../project/builder/factory";
import StandardProjectBuilder               from "../builder";

class StandardProjectBuilderFactory implements ProjectBuilderFactory
{
  construct(
    acceptanceCriterionCollectionFactory  : AcceptanceCriterionCollectionFactory
  ): ProjectBuilder
  {
    return new StandardProjectBuilder(acceptanceCriterionCollectionFactory);
  }
}

export default StandardProjectBuilderFactory;
