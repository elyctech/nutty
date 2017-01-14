import AcceptanceCriterionCollection          from "../../../../../project/user_story/acceptance_criterion/collection";
import AcceptanceCriterionCollectionFactory   from "../../../../../project/user_story/acceptance_criterion/collection/factory";
import StandardAcceptanceCriterionCollection  from "../collection";

class StandardAcceptanceCriterionCollectionFactory implements AcceptanceCriterionCollectionFactory
{
  construct(): AcceptanceCriterionCollection
  {
    return new StandardAcceptanceCriterionCollection();
  }
}

export default StandardAcceptanceCriterionCollectionFactory;
