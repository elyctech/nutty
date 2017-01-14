import AcceptanceCriterionCollection        from "../../../project/user_story/acceptance_criterion/collection";
import AcceptanceCriterionCollectionFactory from "../../../project/user_story/acceptance_criterion/collection/factory";
import AcceptanceCriterion                  from "../../../project/user_story/acceptance_criterion";
import StandardUserStory                    from "../../project/user_story";
import UserStory                            from "../../../project/user_story";
import UserStoryBuilder                     from "../../../project/user_story/builder";

class StandardUserStoryBuilder implements UserStoryBuilder
{
  private acceptanceCriteria  : Array<AcceptanceCriterion>;
  private description         : string;

  constructor(private acceptanceCriterionCollectionFactory: AcceptanceCriterionCollectionFactory)
  {
    this.acceptanceCriteria = new Array<AcceptanceCriterion>();
  }

  addAcceptanceCriterion(acceptanceCriterion: AcceptanceCriterion): UserStoryBuilder
  {
    this.acceptanceCriteria.push(acceptanceCriterion);

    return this;
  }

  getUserStory(): UserStory
  {
    let acceptanceCriterionCollection: AcceptanceCriterionCollection;

    if (this.description.length === 0)
    {
      throw new TypeError("Description cannot be empty");
    }

    acceptanceCriterionCollection = this.acceptanceCriterionCollectionFactory.construct();

    for (let acceptanceCriterion of this.acceptanceCriteria)
    {
      acceptanceCriterionCollection.addAcceptanceCriterion(acceptanceCriterion);
    }

    return new StandardUserStory(acceptanceCriterionCollection, this.description);
  }

  setDescription(description: string): UserStoryBuilder
  {
    this.description = description;

    return this;
  }
}

export default StandardUserStoryBuilder;
