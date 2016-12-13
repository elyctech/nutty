import Project    from "./project";
import UserStory  from "./project/user_story";

interface NuttyService
{
  createProject(description: string): Project;

  createUserStory(description: string): UserStory;
}

export default NuttyService;
