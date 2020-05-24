// timing out

let logString = (message) => {
    console.log(message);
}

logString('hi there!');

let asyncLogString = function(message) {
    setTimeout(() => {
                console.log(message);
            }, 1000);
}

asyncLogString('hi there!');


let getWords = (word1, word2, word3) => {
    setTimeout(() => {
        console.log(word3);
    }, 1000);
    setTimeout(() => {
        console.log(word2);
    }, 2000);
    setTimeout(() => {
        console.log(word1);
    }, 3000);
}

getWords('first', 'second', 'third');

// callbacks and recursion
