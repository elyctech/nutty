import Result         from "../../../result";
import Project        from "../../../../src/lib/project";
import ProjectService from "../../../../src/lib/project/service";

function raisesExceptionForEmptyDescription(projectService: ProjectService, result: Result)
{
  try
  {
    let project1 : Project;

    project1 = projectService.createProject("");

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
