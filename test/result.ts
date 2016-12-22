interface Result
{
  exception(exception: Error): void;

  fail(reason: string): void;

  pass(): void;
}

export default Result;
