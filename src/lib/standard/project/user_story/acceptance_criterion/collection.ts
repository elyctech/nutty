import AcceptanceCriterion            from "../../../../project/user_story/acceptance_criterion";
import AcceptanceCriterionCollection  from "../../../../project/user_story/acceptance_criterion/collection";

class StandardAcceptanceCriterionCollection implements AcceptanceCriterionCollection
{
  private acceptanceCriteria  : Array<AcceptanceCriterion>;

  constructor()
  {
    this.acceptanceCriteria = new Array<AcceptanceCriterion>();
  }

  addAcceptanceCriterion(acceptanceCriterion: AcceptanceCriterion): void
  {
    this.acceptanceCriteria.push(acceptanceCriterion);
  }

  contains(acceptanceCriterion: AcceptanceCriterion): boolean
  {
    return this.acceptanceCriteria.includes(acceptanceCriterion);
  }
}

export default StandardAcceptanceCriterionCollection;
