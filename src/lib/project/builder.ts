import Project    from "../project";
import UserStory  from "./user_story";

interface ProjectBuilder
{
  addUserStory(userStory: UserStory): ProjectBuilder;

  getProject(): Project;

  setDescription(description: string): ProjectBuilder;
}

export default ProjectBuilder;
