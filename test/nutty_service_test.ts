import StandardAcceptanceCriterionCollectionFactory from "../src/lib/standard/project/user_story/acceptance_criterion/collection/factory";
import StandardNuttyService                         from "../src/lib/standard/nutty_service";
import StandardProjectFactory                       from "../src/lib/standard/project/factory";
import StandardProjectBuilderFactory                from "../src/lib/standard/project/builder/factory";
import StandardUserStoryBuilderFactory              from "../src/lib/standard/project/user_story/builder/factory";
import StandardUserStoryCollectionFactory           from "../src/lib/standard/project/user_story/collection/factory";
import StandardUserStoryFactory                     from "../src/lib/standard/project/user_story/factory";

import * as testBuildProject                        from "./nutty_service_test/build_project";
import * as testBuildUserStory                      from "./nutty_service_test/build_user_story";
import * as testCreateProject                       from "./nutty_service_test/create_project";
import * as testCreateUserStory                     from "./nutty_service_test/create_user_story";

let nuttyServiceFactory = {
  construct(): StandardNuttyService
  {
    return new StandardNuttyService(
      new StandardAcceptanceCriterionCollectionFactory(),
      new StandardProjectBuilderFactory(),
      new StandardProjectFactory(),
      new StandardUserStoryBuilderFactory(),
      new StandardUserStoryCollectionFactory(),
      new StandardUserStoryFactory()
    );
  }
};

export default function(test: Function): void
{
  //--- buildProject
  test(
    "The developer can give the Project a description",
    testBuildProject.setsDescription.bind(null, nuttyServiceFactory.construct())
  );

  test(
    "An exception is raised stating a description is required if the developer provides an empty description",
    testBuildProject.raisesExceptionForEmptyDescription.bind(null, nuttyServiceFactory.construct())
  );

  test(
    "The developer can add existing user stories to the project",
    testBuildProject.addsUserStories.bind(null, nuttyServiceFactory.construct())
  );

  test(
    "A Project object is provided to the developer",
    testBuildProject.providesAProjectObject.bind(null, nuttyServiceFactory.construct())
  );

  //--- buildUserStory
  test(
    "The developer can give the User Story a description",
    testBuildUserStory.setsDescription.bind(null, nuttyServiceFactory.construct())
  );

  test(
    "An exception is raised stating a description is required if the developer provides an empty description",
    testBuildUserStory.raisesExceptionForEmptyDescription.bind(null, nuttyServiceFactory.construct())
  );

  test(
    "The developer can add existing acceptance criteria to the user story.",
    testBuildUserStory.addsAcceptanceCriteria.bind(null, nuttyServiceFactory.construct())
  );

  test(
    "A User Story object is provided to the developer",
    testBuildUserStory.providesAUserStoryObject.bind(null, nuttyServiceFactory.construct())
  );

  //--- createProject
  test(
    "The developer can give the Project a description",
    testCreateProject.acceptsADescription.bind(null, nuttyServiceFactory.construct())
  );

  test(
    "An exception is raised stating a description is required if the developer provides an empty description",
    testCreateProject.raisesExceptionForEmptyDescription.bind(null, nuttyServiceFactory.construct())
  );

  test(
    "A Project object is provided to the developer",
    testCreateProject.providesAProjectObject.bind(null, nuttyServiceFactory.construct())
  );

  //--- createUserStory
  test(
    "The developer can give the User Story a description",
    testCreateUserStory.acceptsADescription.bind(null, nuttyServiceFactory.construct())
  );

  test(
    "An exception is raised stating a description is required if the developer provides an empty description",
    testCreateUserStory.raisesExceptionForEmptyDescription.bind(null, nuttyServiceFactory.construct())
  );

  test(
    "A User Story object is provided to the developer",
    testCreateUserStory.providesAUserStoryObject.bind(null, nuttyServiceFactory.construct())
  );
};