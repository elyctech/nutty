import Result         from "../../../result";
import Project        from "../../../../src/lib/project";
import ProjectService from "../../../../src/lib/project/service";

function acceptsADescription(projectService: ProjectService, result: Result)
{
  let pass                : boolean,
      project1            : Project,
      project1Description : string,
      project2            : Project,
      project2Description : string;

  pass                = true;

  project1            = projectService.createProject("A description");
  project1Description = project1.getDescription();

  project2            = projectService.createProject("Another description");
  project2Description = project2.getDescription();

  if (project1Description !== "A description")
  {
    result.fail("Expected project description to be 'A description' but got '" + project1Description + "'");
    pass = false;
  }

  if (project2Description !== "Another description")
  {
    result.fail("Expected project description to be 'Another descrption' but got '" + project2Description + '"');
    pass = false;
  }

  if (pass)
  {
    result.pass();
  }
}

export default acceptsADescription;
