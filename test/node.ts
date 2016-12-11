//--- Testing API

interface Result
{
  exceptions  : number;
  failures    : number;
  passes      : number;
  report      : string;
  unknowns    : number;

  exception(exception: Error): void;

  fail(reason: string): void;

  pass(): void;

  test(description: string, testFunction: Function) : void;

  totalResultCount(): number;
}

let result      : Result,
    resultCount : number,
    runTest     : Function;
    
result = {
  exceptions  : 0, 
  failures    : 0,
  passes      : 0,
  report      : "",
  unknowns    : 0,

  exception(exception: Error): void
  {
    this.exceptions += 1;
    this.report += exception.stack + "\n\n";
  },

  fail(reason: string): void
  {
    this.failures += 1;
    this.report += "Failed.\n\n    " + reason + "\n\n";
  },

  pass(): void
  {
    this.passes += 1;
    this.report += "Passed!\n\n";
  },

  test(description: string, testFunction: Function): void
  {
    let beforeResultCount = this.totalResultCount();

    this.report += "Starting test: " + description + "... ";

    try
    {
      testFunction(this);
    }
    catch (exception)
    {
      this.exception(exception);
    }

    if (this.totalResultCount() === beforeResultCount)
    {
      this.unknowns += 1;
      this.report += "No result.\n\n";
    }
  },

  totalResultCount(): number
  {
    return this.passes + this.failures + this.exceptions + this.unknowns;
  }
};

runTest = result.test.bind(result);

//--- Test Executions

import projectServiceTest from "./project/service_test";

projectServiceTest(runTest);

//--- Test Results

resultCount = result.totalResultCount();

if (result.passes === resultCount)
{
  result.report += resultCount + " test" + (resultCount > 1 ? "s were" : " was") + " executed and passed."

  console.log(result.report);
}
else
{
  if (result.failures === resultCount)
  {
    result.report += resultCount + " test" + (resultCount > 1 ? "s were" : " was") + " executed and failed";
  }
  else if (result.exceptions === resultCount)
  {
    result.report += resultCount + " test" + (resultCount > 1 ? "s were" : " was") + " executed and threw "  + (resultCount > 1 ? "an exception" : "exceptions");
  }
  else if (result.unknowns === resultCount)
  {
    result.report += resultCount + " test" + (resultCount > 1 ? "s were" : " was") + " executed and reported no results";
  }
  else
  {
    result.report += resultCount + " test" + (resultCount > 1 ? "s were" : " was") + " executed. "

    if (result.passes > 0)
    {
      result.report += result.passes + " test" + (result.passes > 1 ? "s" : "") + " passed";
    }

    if (result.failures > 0)
    {
      if (result.passes > 0)
      {
        if (result.exceptions + result.unknowns === 0)
        {
          result.report += " and ";
        }
        else
        {
          result.report += ", ";
        }
      }

      result.report += result.failures + " test" + (result.failures > 1 ? "s" : "") + " failed";
    }

    if (result.exceptions > 0)
    {
      if (result.passes + result.failures > 0)
      {
        if (result.unknowns > 0)
        {
          result.report += ", ";
        }
        else
        {
          if (result.passes > 0 && result.failures > 0)
          {
            result.report += ",";
          }

          result.report += " and ";
        }
      }

      result.report += result.exceptions + " test" + (result.exceptions > 1 ? "s" : "") + " threw " + (resultCount > 1 ? "an exception" : "exceptions") + (result.unknowns > 0 ? "," : "");
    }

    if (result.unknowns > 0)
    {
      if (result.passes + result.failures + result.exceptions > 0)
      {
        result.report += " and ";
      }

      result.report += result.unknowns + " test" + (result.unknowns > 1 ? "s" : "") + " reported no results";
    }
  }

  console.error(result.report + ".");
}
