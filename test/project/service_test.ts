import StandardProjectService from "../../src/lib/standard/project/service";

import * as testCreateProject from "./service_test/create_project";

export default function(test: Function): void
{
  test(
    "The developer can give the Project a description",
    testCreateProject.acceptsADescription.bind(null, new StandardProjectService())
  );

  test(
    "An exception is raised stating a description is required if the developer provides an empty description",
    testCreateProject.raisesExceptionForEmptyDescription.bind(null, new StandardProjectService())
  );

  test(
    "A Project object is provided to the developer",
    testCreateProject.providesAProjectObject.bind(null, new StandardProjectService())
  )
};