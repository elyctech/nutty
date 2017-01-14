import VerificationResult from "../verification_result";

interface AcceptanceCriterion
{
  getDescription() : string;

  isMet() : VerificationResult;
}

export default AcceptanceCriterion;
