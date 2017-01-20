import Project          from "./project";
import ProjectBuilder   from "./project/builder";
import UserStory        from "./project/user_story";
import UserStoryBuilder from "./project/user_story/builder";

interface NuttyService
{
  buildProject(): ProjectBuilder;

  buildUserStory(): UserStoryBuilder;

  createProject(description: string): Project;

  createUserStory(description: string): UserStory;
}

export default NuttyService;
