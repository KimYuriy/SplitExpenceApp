import { createStore } from "vuex";

export default createStore({
    state: {
        people: [],
        dishes: [],
        totalSum: 0
    },

    getters: {
        getPeople(state) {
            return state.people;
        },
        getDishes(state) {
            return state.dishes;
        },
        getPeopleLength(state) {
            return state.people.length;
        },
        getTotalSum(state) {
            return state.totalSum;
        }
    },

    mutations: {
        addPerson(state, person) {
            state.people.push(person);
        },
        removePerson(state, person) {
            state.people = state.people.filter(p => p.ID !== person.ID);
        },
        addDish(state, dish) {
            state.dishes.push(dish);
        },
        removeDish(state, dish) {
            state.dishes = state.dishes.filter(d => d.ID != dish.ID);
        }
    },

    actions: {
        addMoney({state, commit}, dish) {
            state.totalSum += dish.price;
            let averagePrice = Math.ceil(dish.price / dish.whoChoosed.length);
            for (let j = 0; j < dish.whoChoosed.length; j++) {
                for (let i = 0; i < state.people.length; i++) {
                    if (state.people[i].name === dish.whoChoosed[j]) {
                        state.people[i].money += averagePrice;
                    }
                }
            }
            commit('addDish', dish);
        },
        decreaseMoney({state, commit}, dish) {
            state.totalSum -= dish.price;
            let averagePrice = Math.ceil(dish.price / dish.whoChoosed.length);
            for (let j = 0; j < dish.whoChoosed.length; j++) {
                for (let i = 0; i < state.people.length; i++) {
                    if (state.people[i].name === dish.whoChoosed[j]) {
                        state.people[i].money -= averagePrice;
                    }
                }
            }
            commit('removeDish', dish);
        }
    }
})