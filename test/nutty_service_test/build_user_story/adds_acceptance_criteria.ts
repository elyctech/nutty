import AcceptanceCriterion            from "../../../src/lib/project/user_story/acceptance_criterion";
import AcceptanceCriterionCollection  from "../../../src/lib/project/user_story/acceptance_criterion/collection";
import NuttyService                   from "../../../src/lib/nutty_service";
import Result                         from "../../result";
import UserStory                      from "../../../src/lib/project/user_story";

function addsAcceptanceCriteria(nuttyService: NuttyService, result: Result)
{
  let acceptanceCriteria  : AcceptanceCriterionCollection,
      criterion1          : AcceptanceCriterion,
      criterion2          : AcceptanceCriterion,
      failed              : boolean,
      userStory1          : UserStory;

  criterion1 = {
    getDescription: () =>  "Is completed",
    "isMet": () => { return {}; }
  };

  criterion2 = {
    getDescription: () =>  "Implemented property",
    "isMet": () => { return {}; }
  };

  userStory1 = nuttyService.buildUserStory()
                           .setDescription("A User Story")
                           .addAcceptanceCriterion(criterion1)
                           .addAcceptanceCriterion(criterion2)
                           .getUserStory();

  acceptanceCriteria = userStory1.getAcceptanceCriteria();

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
