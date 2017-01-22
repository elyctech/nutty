import Project              from "../project";
import UserStoryCollection  from "../project/user_story/collection";

interface ProjectFactory
{
  construct(
    description : string,
    userStories : UserStoryCollection
  ): Project;
}

export default ProjectFactory;
