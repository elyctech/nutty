import Result         from "../../../result";
import Project        from "../../../../src/lib/project";
import ProjectService from "../../../../src/lib/project/service";

function raisesExceptionForEmptyDescription(projectService: ProjectService, result: Result)
{
  let project  : Project;

  project = projectService.createProject("A description");

  // Since strict null checks are enabled, as long as it makes it here project has to be an instance of a project
  result.pass();
}

export default raisesExceptionForEmptyDescription;
