import NuttyService from "../../../src/lib/nutty_service";
import Result       from "../../result";
import Project      from "../../../src/lib/project";

function raisesExceptionForEmptyDescription(nuttyService: NuttyService, result: Result)
{
  try
  {
    let project1 : Project;

    project1 = nuttyService.createProject("");

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
      this.exception(exception);
    }
  }
}

export default raisesExceptionForEmptyDescription;
