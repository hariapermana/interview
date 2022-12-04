let n;

function testFunction(n) {
  let j;

  for (let i = 1, index = n + 1; i < index; i += 1) {
    j = 1;

    while (j <= n + 3) {
      console.log(j);

      if (i === j) {
        console.log("**");
        j += 2;
      }

      j += 1;
    }

    console.log("");
  }
}

testFunction(5);
testFunction(4);
