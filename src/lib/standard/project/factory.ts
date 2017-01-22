import Project              from "../../project";
import ProjectFactory       from "../../project/factory";
import StandardProject      from "../project";
import UserStoryCollection  from "../../project/user_story/collection";

class StandardProjectFactory implements ProjectFactory
{
  construct(
    description : string,
    userStories : UserStoryCollection
  ): Project
  {
    return new StandardProject(description, userStories);
  }
}

export default StandardProjectFactory;
