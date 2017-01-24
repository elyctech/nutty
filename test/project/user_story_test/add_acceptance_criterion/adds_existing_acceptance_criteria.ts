import AcceptanceCriterion            from "../../../../src/lib/project/user_story/acceptance_criterion";
import AcceptanceCriterionCollection  from "../../../../src/lib/project/user_story/acceptance_criterion/collection";
import Result                         from "../../../result";
import UserStory                      from "../../../../src/lib/project/user_story";

function addsAcceptanceCriteria(userStory: UserStory, result: Result)
{
  let acceptanceCriteria  : AcceptanceCriterionCollection,
      criterion1          : AcceptanceCriterion,
      criterion2          : AcceptanceCriterion,
      failed              : boolean;

  criterion1 = {
    getDescription: () =>  "Is completed",
    "isMet": () => { return {}; }
  };

  criterion2 = {
    getDescription: () =>  "Implemented property",
    "isMet": () => { return {}; }
  };

  userStory.addAcceptanceCriterion(criterion1);
  userStory.addAcceptanceCriterion(criterion2);

  acceptanceCriteria = userStory.getAcceptanceCriteria();

  failed = false;

  if (!acceptanceCriteria.contains(criterion1))
  {
    result.fail("Expected acceptance criteria to contain 'Is Completed' criterion");
    failed = true;
  }

  if (!acceptanceCriteria.contains(criterion2))
  {
    result.fail("Expected acceptance criteria to contain 'Implemented property' criterion");
    failed = true;
  }

  if (!failed)
  {
    result.pass();
  }
}

export default addsAcceptanceCriteria;
