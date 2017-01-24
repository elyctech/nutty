// Polyfill for Node 4/5

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(searchElement: any, fromIndex: number | undefined) {

      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        // c. Increase k by 1.
        // NOTE: === provides the correct "SameValueZero" comparison needed here.
        if (o[k] === searchElement) {
          return true;
        }
        k++;
      }

      // 8. Return false
      return false;
    }
  });
}

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

import nuttyServiceTest from "./nutty_service_test";
import projectTest      from "./project_test";
import userStoryTest    from "./project/user_story_test";

nuttyServiceTest(runTest);
projectTest(runTest);
userStoryTest(runTest);

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
