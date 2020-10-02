let { repeatMessage } = require("../source/index");

test("Name of an example test", () => {
  expect("this is a truthy string").toBeTruthy();
});

test("Name of an example test", () => {
  expect(repeatMessage("hello", 3)).toEqual("hellohellohello");
});

test("Repeat message is a function.", () => {
  expect(typeof repeatMessage).toBe("function");
});

describe("repeatMessage functionality", () => {
  test("repeatMessage is a function.", () => {
    expect(typeof repeatMessage).toBe("function");
  });
  test("If given 'hello' and 3 as inputs, repeatMessage will return 'hellohellohello'.", () => {
    expect(repeatMessage("hello", 3)).toEqual("hellohellohello");
  });
});

const request = require("supertest");
const { server, app } = require("../source/index"); //requiring instance of the app this running and Express server
//request for get requests

afterAll(async (done) => {
  // Force our server reference to close:
  await server.close();

  // Dumb hack to trick Jest into waiting a bit more before
  // it freaks out over processes hanging open.
  // Potentially because server.close() does not complete instantly? Not sure.
  // This has been an issue for ExpressJS & Jest devs
  // for several years & solutions are vague.
  await new Promise((resolve) => setTimeout(() => resolve(), 500));

  // Resolve the done() callback? Again not sure, as solutions are vague.
  done();
});

describe("Express server home page functionality", () => {
  test("should  return status 200", async (done) => {
    const response = await request(app).get("/");
    expect(response.statusCode).toEqual(200);
    done(); //done() is a jest function which is required
  });

  test('should return "Hello World!"', async (done) => {
    const response = await request(app).get("/");
    // console.log("response=>", response);
    expect(response.body.message).toEqual("Hello World!");
    done();
  });
});
//test for post request
describe("/studentNames page functionality", () => {
  test('should return the word "Luke"', async (done) => {
    const response = await request(app)
      .post("/studentNames")
      .send({
        //this is request

        studentsNames: ["Luke", "mike", "jason"],
      });

    expect(response.body.firstStudentName).toEqual("Luke");
    done();
  });
});
