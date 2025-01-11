for (let x = 0; x < 500000; x++) {
  console.log(x);
  if (x == 700) {
    process.exit();
  }
}
