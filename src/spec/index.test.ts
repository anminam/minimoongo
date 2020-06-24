export {};

const getUser = ({
  name,
  age,
}: {
  name: string;
  age: number;
}): { name: string; age: number } => {
  return {
    name: name,
    age: age,
  };
};
test("return a user obj", () => {
  expect(getUser({ name: "미니", age: 123 })).toEqual({
    name: "미니",
    age: 123,
  });
});

test("이것은 참인가", () => {
  expect(1).toBeTruthy();
  // expect(-1).toBeFalsy();
  expect(-1).toBeTruthy();
});
