    solving(`12
    2
    5`);

    function solving(input) {
      input = input.split("\n");
      let T = input.length;
      let array = input.map(Number);
      let start = 0;
      let i = 0;
      while (start < T) {
        let res = array[i] / 2 + array[i] / 4 + array[i] / 3;
        console.log(Math.floor(res));
        i++;
        start = start + 1;
      }
    }
