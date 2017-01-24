import StandardUserStory                      from "../../src/lib/standard/project/user_story";
import StandardAcceptanceCriterionCollection  from "../../src/lib/standard/project/user_story/acceptance_criterion/collection";

import * as testUserStory                     from "./user_story_test/add_acceptance_criterion";

let userStoryFactory = {
  construct(): StandardUserStory
  {
    return new StandardUserStory(
      new StandardAcceptanceCriterionCollection(),
      "Test Project"
    );
  }
};

export default function(test: Function): void
{
  //--- buildProject
  test(
    "The developer can add existing acceptance criteria to the user story",
    testUserStory.addsExistingAcceptanceCriteria.bind(null, userStoryFactory.construct())
  );
};