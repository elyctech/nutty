import Project          from "./project";
import UserStory        from "./project/user_story";
import UserStoryBuilder from "./project/user_story/builder";

interface NuttyService
{
  buildUserStory(): UserStoryBuilder;

  createProject(description: string): Project;

  createUserStory(description: string): UserStory;
}

export default NuttyService;
