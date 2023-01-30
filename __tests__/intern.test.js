const Intern = require("../lib/Intern");

test("Can create school.", () => {
  const testSchool = "testName";
  const employeeInstance = new Intern("Cory", 2, "cory@test.com", testSchool);
  expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
  const testSchool = "testName";
  const employeeInstance = new Intern("Cory", 2, "cory@test.com", testSchool);
  expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
  const returnValue = "Intern";
  const employeeInstance = new Intern(
    "Cory",
    2,
    "cory@test.com",
    testSchool,
    "testName"
  );
  expect(employeeInstance.getRole()).toBe(returnValue);
});
