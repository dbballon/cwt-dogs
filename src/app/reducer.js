const INITIAL_STATE = {
    dogs: []
}

export const dogReducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case "SET_DOGS":
            const randomDogs = [];
            const allDogs = [...action.content]
            for (let i = 0; i < 100; i++) {
                randomDogs.push({
                    name: allDogs[Math.floor(Math.random() * allDogs.length)],
                    likes: 0
                })
            }
            return {
                dogs: randomDogs
            };
        case "ADD_LIKE":
            const dogs = [...state.dogs];
            dogs[action.content] = { name: state.dogs[action.content].name, likes: state.dogs[action.content].likes + 1 }
            return {
                dogs
            };

        default:
            return state;
    }
};
export default dogReducer