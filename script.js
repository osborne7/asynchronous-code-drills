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

let done = () => {
    console.log(`job's done!`);
}

let countdown = (num, callback) => {
    setTimeout(() => {
        if (num > 0) {
            console.log(num);
            countdown(num - 1, callback);
        } else {
            done();
        }
    }, 1000);
}

countdown(15, done);


// promises

let lunchTime = false;

let orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        if (lunchTime === true) {
            let myOrder = {
                lunch: 'smoothie',
                drink: 'seltzer'
            }
                resolve(myOrder);
        } else {
           let myError = new Error('no lunch!');
            reject(myError);
        }
    });
};

orderMeSomeFood().then((value) => {
    console.log('lunch!!!');
}
    
).catch((error) => {
    console.log(error);

});