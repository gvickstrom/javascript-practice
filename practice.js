//bullet 1
for (i = 0; i <= 25; i++) {
  if(i % 2 === 0) {
    console.log(i + ' ' + 'even');
  }
  if(i % 2 === 1) {
    console.log(i + ' ' + 'odd');
  }
};

//bullet 2
for (i=0; i <=50; i++) {
  if(i % 15 === 0) {
    console.log('FizzBuzz');
  }
  else if(i % 3 === 0) {
    console.log('Fizz');
  }
  else if(i % 5 === 0) {
    console.log('Buzz');
  }
  else {
    console.log(i);
  }
};

//bullet 3
var sum = 0;
for (i = 1; i <= 1000; i++) {
  if(i % 3 === 0) {
    sum = sum + i;
  }
  else if(i % 5 === 0) {
    sum = sum + i;
  }
  else {
    sum = sum + 0;
  }
}
  console.log(sum);

  //bullet 4
var hash = '';
  for (i = 0; i < 7; i++) {
  hash = hash + '#';
    console.log(hash);
  };

  //#1
  for (i = 0; i <= 1000; i+=100) {
    console.log(i);
  }

  //#2
  for (i = 1; i <=128; i=i*2) {
    console.log(i);
  }

  //#3
  for (i = 0; i <= 10; i=i+2) {
    console.log(i);
  }

  //#4
  for (i = 3; i <= 15; i=i+3) {
    console.log(i);
  }

  //#5
  for (i = 9; i >= 0; i--) {
    console.log(i);
  }

  //#6
  for(i = 1; i <=4; i++) {
    console.log(i);
    console.log(i);
    console.log(i);
  }

  //#7
  for(x = 0; x <= 2; x++)
    for (i = 0; i <= 4; i++) {
      console.log(i);
  }
