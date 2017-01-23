import StandardNuttyService         from "../src/lib/standard/nutty_service";
import StandardProject              from "../src/lib/standard/project";
import StandardUserStoryCollection  from "../src/lib/standard/project/user_story/collection";
import UserStoryCollectionFactory   from "../src/lib/project/user_story/collection/factory";

import * as testProject             from "./project_test/add_user_story";

let projectFactory = {
  construct(): StandardProject
  {
    return new StandardProject(
      "Test Project",
      new StandardUserStoryCollection()
    );
  }
};

export default function(test: Function): void
{
  //--- buildProject
  test(
    "The developer can add existing user stories to the project",
    testProject.addsExistingUserStories.bind(null, projectFactory.construct())
  );
};