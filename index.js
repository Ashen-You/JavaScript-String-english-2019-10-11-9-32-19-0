// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase());

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
words = sentence.split(" ")
for (index in words) {
    words[index] = words[index].slice(0, 1).toUpperCase() + words[index].slice(1);
}
console.log(words.join(" "));

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
var ans = ''
for (index in money) {
    if (!isNaN(money[index])) ans += money[index];
}
console.log(ans);