import React from 'react';

const defaultState = {
    todos: [],
    example: { isChanged: false}
}

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
    payload: { id: Date.now(), message}
})