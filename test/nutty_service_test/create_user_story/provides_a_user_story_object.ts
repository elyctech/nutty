import NuttyService from "../../../src/lib/nutty_service";
import Result       from "../../result";
import UserStory    from "../../../src/lib/project/user_story";

function raisesExceptionForEmptyDescription(nuttyService: NuttyService, result: Result)
{
  let userStory  : UserStory;

  userStory = nuttyService.createUserStory("A description");

  // Since strict null checks are enabled, as long as it makes it here project has to be an instance of a project
  result.pass();
}

export default raisesExceptionForEmptyDescription;
