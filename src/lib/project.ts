import UserStoryCollection  from "./project/user_story/collection";

interface Project
{
  getDescription(): string;

  getUserStories(): UserStoryCollection;
}

export default Project;
