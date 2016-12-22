import NuttyService from "../../../src/lib/nutty_service";
import Result       from "../../result";
import Project      from "../../../src/lib/project";

function raisesExceptionForEmptyDescription(nuttyService: NuttyService, result: Result)
{
  let project  : Project;

  project = nuttyService.createProject("A description");

  // Since strict null checks are enabled, as long as it makes it here project has to be an instance of a project
  result.pass();
}

export default raisesExceptionForEmptyDescription;
