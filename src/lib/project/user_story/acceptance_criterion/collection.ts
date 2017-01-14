import AcceptanceCriterion  from "../acceptance_criterion";

interface AcceptanceCriterionCollection
{
  addAcceptanceCriterion(acceptanceCriterion: AcceptanceCriterion): void;

  contains(acceptanceCriterion: AcceptanceCriterion): boolean;
}

export default AcceptanceCriterionCollection;
