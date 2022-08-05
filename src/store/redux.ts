import React from 'react';
import any = jasmine.any;
import {createStore} from "redux";

// 1. State
const defaultState = {
    todos: [],
    example: { isChanged: false}
}

// 2. Actions

const exampleAction  = {
    type: "TYP_AKCJI",
    payload: {}
};

const TODOS_ACTIONS_TYPES = {
    ADD: "ADD",
    UPDATE: "UPDATE",
    DELETE: "DELETE",
    REMOVE_ALL: "REMOVE_ALL",
}

const exampleAction2 = {
    type: TODOS_ACTIONS_TYPES,
    payload: {}
}
const addTodo = (message: string) => ({
    type: TODOS_ACTIONS_TYPES,
    payload: { id: Date.now(), message }
})

const deleteTodo = (id: any) => ({
    type: TODOS_ACTIONS_TYPES,
    payload: id
});

const updateTodo = (id: any, message: string) => ({
    type: TODOS_ACTIONS_TYPES,
    payload: { id, message }
});

const removeAllTodos = () => ({
    type: TODOS_ACTIONS_TYPES
})

// 3. Reducer

const reducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case TODOS_ACTIONS_TYPES.ADD:
            return {...state, todos: [...state.todos, action.payload]};
        case TODOS_ACTIONS_TYPES.DELETE:
            const filteredTodos = state.todos.filter(
                (id) => id !== action.payload)
            return {...state, todos: filteredTodos}
        case TODOS_ACTIONS_TYPES.UPDATE:
            const todos = state.todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        message: action.payload.message
                    };
                }
                return todo;
            })
            return { ...state, todos };
        case TODOS_ACTIONS_TYPES.REMOVE_ALL:
            return {...state, todos: []};
        default:
            return state;
    }
};

const store = createStore(reducer);

// 4. Dispatch

// store.dispatch({
//     type: "ADD",
//     payload: { id: 1, message: "Coś do zrobienia"}
// })
store.dispatch(addTodo("Coś do zrobienia"))
// store.dispatch(deleteTodo(1))
store.dispatch(updateTodo(1, "Edytowano"))
// store.dispatch(removeAllTodos())


