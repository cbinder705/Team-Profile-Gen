const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
  const employeeInstance = new Employee();
  expect(typeof employeeInstance).toBe("object");
});

test("Testing name.", () => {
  const name = "Cory";
  const employeeInstance = new Employee(name);
  expect(employeeInstance.name).toBe(name);
});

test("Testing ID.", () => {
  const id = 2;
  const employeeInstance = new Employee("Cory", id);
  expect(employeeInstance.id).toBe(id);
});

test("Testing email.", () => {
  const email = "cory@test.com";
  const employeeInstance = new Employee("Cory", 2, email);
  expect(employeeInstance.email).toBe(email);
});
