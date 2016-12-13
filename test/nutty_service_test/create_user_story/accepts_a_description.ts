import NuttyService from "../../../src/lib/nutty_service";
import Result       from "../../result";
import UserStory    from "../../../src/lib/project/user_story";

function acceptsADescription(nuttyService: NuttyService, result: Result)
{
  let pass                  : boolean,
      userStory1            : UserStory,
      userStory1Description : string,
      userStory2            : UserStory,
      userStory2Description : string;

  pass                  = true;

  userStory1            = nuttyService.createUserStory("A description");
  userStory1Description = userStory1.getDescription();

  userStory2            = nuttyService.createUserStory("Another description");
  userStory2Description = userStory2.getDescription();

  if (userStory1Description !== "A description")
  {
    result.fail("Expected user story description to be 'A description' but got '" + userStory1Description + "'");
    pass = false;
  }

  if (userStory2Description !== "Another description")
  {
    result.fail("Expected user story description to be 'Another descrption' but got '" + userStory2Description + "'");
    pass = false;
  }

  if (pass)
  {
    result.pass();
  }
}

export default acceptsADescription;
