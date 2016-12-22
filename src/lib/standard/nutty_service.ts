import NuttyService             from "../nutty_service";
import Project                  from "../project";
import StandardProject          from "./project";
import StandardUserStory        from "./project/user_story";
import StandardUserStoryBuilder from "./project/user_story/builder";
import UserStory                from "../project/user_story";
import UserStoryBuilder         from "../project/user_story/builder";

class StandardNuttyService implements NuttyService
{
  buildUserStory(): UserStoryBuilder
  {
    return new StandardUserStoryBuilder();
  }

  createProject(description: string): Project
  {
    if (description.length === 0)
    {
      throw new TypeError("Description cannot be empty");
    }

    return new StandardProject(description);
  }

  createUserStory(description: string): UserStory
  {
    if (description.length === 0)
    {
      throw new TypeError("Description cannot be empty");
    }

    return new StandardUserStory(description);
  }
}

export default StandardNuttyService;
