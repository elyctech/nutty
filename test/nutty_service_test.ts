import StandardAcceptanceCriterionCollectionFactory from "../src/lib/standard/project/user_story/acceptance_criterion/collection/factory";
import StandardNuttyService                         from "../src/lib/standard/nutty_service";

import * as testBuildUserStory                      from "./nutty_service_test/build_user_story";
import * as testCreateProject                       from "./nutty_service_test/create_project";
import * as testCreateUserStory                     from "./nutty_service_test/create_user_story";

export default function(test: Function): void
{
  //--- buildUserStory
  test(
    "The developer can give the User Story a description",
    testBuildUserStory.setsDescription.bind(null, new StandardNuttyService(new StandardAcceptanceCriterionCollectionFactory()))
  );

  test(
    "An exception is raised stating a description is required if the developer provides an empty description",
    testBuildUserStory.raisesExceptionForEmptyDescription.bind(null, new StandardNuttyService(new StandardAcceptanceCriterionCollectionFactory()))
  );

  test(
    "The developer can add existing acceptance criteria to the user story.",
    testBuildUserStory.addsAcceptanceCriteria.bind(null, new StandardNuttyService(new StandardAcceptanceCriterionCollectionFactory()))
  );

  //--- createProject
  test(
    "The developer can give the Project a description",
    testCreateProject.acceptsADescription.bind(null, new StandardNuttyService(new StandardAcceptanceCriterionCollectionFactory()))
  );

  test(
    "An exception is raised stating a description is required if the developer provides an empty description",
    testCreateProject.raisesExceptionForEmptyDescription.bind(null, new StandardNuttyService(new StandardAcceptanceCriterionCollectionFactory()))
  );

  test(
    "A Project object is provided to the developer",
    testCreateProject.providesAProjectObject.bind(null, new StandardNuttyService(new StandardAcceptanceCriterionCollectionFactory()))
  );

  //--- createUserStory
  test(
    "The developer can give the User Story a description",
    testCreateUserStory.acceptsADescription.bind(null, new StandardNuttyService(new StandardAcceptanceCriterionCollectionFactory()))
  );

  test(
    "An exception is raised stating a description is required if the developer provides an empty description",
    testCreateUserStory.raisesExceptionForEmptyDescription.bind(null, new StandardNuttyService(new StandardAcceptanceCriterionCollectionFactory()))
  );

  test(
    "A User Story object is provided to the developer",
    testCreateUserStory.providesAUserStoryObject.bind(null, new StandardNuttyService(new StandardAcceptanceCriterionCollectionFactory()))
  );
};