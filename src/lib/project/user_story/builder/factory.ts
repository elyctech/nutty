import AcceptanceCriterionCollectionFactory from "../acceptance_criterion/collection/factory";
import UserStoryBuilder                     from "../builder";

interface UserStoryBuilderFactory
{
  construct(acceptanceCriterionCollectionFactory: AcceptanceCriterionCollectionFactory): UserStoryBuilder;
}

export default UserStoryBuilderFactory;
