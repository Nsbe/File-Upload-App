var questions = [
"What is your name?"'
"Name of file for upload?"
];

var answers = [];

function ask(i) {

process.stdout.write('\n\n\n ${questions[i]}');
process.stdout.write(" > ");
}
