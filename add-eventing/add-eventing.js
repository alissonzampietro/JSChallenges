const addEventing = function (obj) {
    const actions = [];
    let returnedObj = {
        on: (event, callBack) => {
            if(!actions[event]) {
                actions[event] = []
            }
            actions[event].push(callBack)
        },
        trigger: (event, ...args) => {
            actions[event].map((callback) => callback(...args))
        }
    }
    return returnedObj;
}

module.exports = addEventing
