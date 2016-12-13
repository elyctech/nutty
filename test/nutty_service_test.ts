import StandardNuttyService   from "../src/lib/standard/nutty_service";

import * as testCreateProject from "./nutty_service_test/create_project";

export default function(test: Function): void
{
  test(
    "The developer can give the Project a description",
    testCreateProject.acceptsADescription.bind(null, new StandardNuttyService())
  );

  test(
    "An exception is raised stating a description is required if the developer provides an empty description",
    testCreateProject.raisesExceptionForEmptyDescription.bind(null, new StandardNuttyService())
  );

  test(
    "A Project object is provided to the developer",
    testCreateProject.providesAProjectObject.bind(null, new StandardNuttyService())
  )
};