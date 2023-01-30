const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
  const testGithub = "testGitUser";
  const employeeInstance = new Engineer("Cory", 2, "cory@test.com", testGithub);
  expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
  const testGithub = "testGitUser";
  const employeeInstance = new Engineer("Cory", 2, "cory@test.com", testGithub);
  expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
  const returnValue = "Engineer";
  const employeeInstance = new Engineer(
    "Cory",
    2,
    "cory@test.com",
    "testGitUser"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
