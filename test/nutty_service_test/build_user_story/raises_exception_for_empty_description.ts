import NuttyService from "../../../src/lib/nutty_service";
import Result       from "../../result";
import UserStory    from "../../../src/lib/project/user_story";

function raisesExceptionForEmptyDescription(nuttyService: NuttyService, result: Result)
{
  try
  {
    let userStory1 : UserStory;

    userStory1 = nuttyService.buildUserStory()
                             .setDescription("")
                             .getUserStory();

    result.fail("Excepted exception stating 'Description cannot be empty' but got no exception");
  }
  catch (exception)
  {
    if (exception.message === "Description cannot be empty")
    {
      result.pass();
    }
    else
    {
      result.exception(exception);
    }
  }
}

export default raisesExceptionForEmptyDescription;
