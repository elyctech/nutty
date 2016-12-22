interface Result
{
  pass(): void;

  fail(reason: string): void;
}

export default Result;
