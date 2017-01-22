import StandardUserStoryCollection  from "../collection";
import UserStoryCollection          from "../../../../project/user_story/collection";
import UserStoryCollectionFactory   from "../../../../project/user_story/collection/factory";

class StandardUserStoryCollectionFactory implements UserStoryCollectionFactory
{
  construct(): UserStoryCollection
  {
    return new StandardUserStoryCollection();
  }
}

export default StandardUserStoryCollectionFactory;
