//JS single Thread
function test1() {
  return test1();
}
console.log("one");
test1();
console.log("two");
