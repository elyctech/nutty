import UserStory  from "../project/user_story";

class StandardUserStory implements UserStory
{
  constructor(private description: string)
  {

  }

  getDescription(): string
  {
    return this.description;
  }
}

export default StandardUserStory;
