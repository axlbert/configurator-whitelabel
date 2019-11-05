import { ADD_MACHINE } from '../constants/action-types';

export function addMachine(payload) {
    return {type: ADD_MACHINE, payload};
};
