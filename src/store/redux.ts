import React from 'react';

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

const reducer = (state = defaultState, reducer: any) => {
    
}
