let bestGreetings = 'Hello';
alert (bestGreetings);
bestGreetings = 'JavaScript';
alert(bestGreetings);

const age = Number(prompt('Enter your age'));
alert('Your age is: ' +age);

const nextAge = addOne(age);
alert('Next year you will be' + nextAge);

if (age >=18) {
    alert('You adult!');
} else {
    alert('You are underaged!');
}

function addOne(num) {
    const incremented = num + 1;
    return incremented;
}