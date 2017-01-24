import AcceptanceCriterion            from "../../../src/lib/project/user_story/acceptance_criterion";
import AcceptanceCriterionCollection  from "../../../src/lib/project/user_story/acceptance_criterion/collection";
import NuttyService                   from "../../../src/lib/nutty_service";
import Result                         from "../../result";
import Project                        from "../../../src/lib/project";
import UserStory                      from "../../../src/lib/project/user_story";
import UserStoryCollection            from "../../../src/lib/project/user_story/collection";

function addsUserStories(nuttyService: NuttyService, result: Result)
{
  let fakeAcceptanceCriterionCollection : AcceptanceCriterionCollection,
      userStories                       : UserStoryCollection,
      userStory1                        : UserStory,
      userStory2                        : UserStory,
      failed                            : boolean,
      project                           : Project;

  fakeAcceptanceCriterionCollection = {
    addAcceptanceCriterion(acceptanceCriterion: AcceptanceCriterion): void
    {

    },

    contains(acceptanceCriterion: AcceptanceCriterion): boolean
    {
      return false;
    }
  };

  userStory1 = {
    addAcceptanceCriterion: () => {},
    getAcceptanceCriteria: () => fakeAcceptanceCriterionCollection,
    getDescription: () =>  "User Story 1"
  };

  userStory2 = {
    addAcceptanceCriterion: () => {},
    getAcceptanceCriteria: () => fakeAcceptanceCriterionCollection,
    getDescription: () =>  "User Story 2"
  };

  project = nuttyService.buildProject()
                        .setDescription("A User Story")
                        .addUserStory(userStory1)
                        .addUserStory(userStory2)
                        .getProject();

  userStories = project.getUserStories();

  failed = false;

  if (!userStories.contains(userStory1))
  {
    result.fail("Expected user stories to contain 'User Story 1' story");
    failed = true;
  }

  if (!userStories.contains(userStory2))
  {
    result.fail("Expected user stories to contain 'User Story 2' story");
    failed = true;
  }

  if (!failed)
  {
    result.pass();
  }
}

export default addsUserStories;
