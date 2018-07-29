const addEventing = function (obj) {
    const actions = [];
    let returnedObj = {
        on: (event, callBack) => {
            if(!actions[event]) {
                actions[event] = []
            }
            actions[event].push(callBack)
        },
        // ...args is converted to array of arguments
        trigger: (event, ...args) => {
            if(actions[event]) {
                // ...args here is coverter to parameters
                actions[event].map((callback) => callback(...args))   
            }
        }
    }
    return returnedObj;
}

module.exports = addEventing
