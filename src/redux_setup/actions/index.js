import { 
    ADD_MACHINE,
    ADD_SUSPENSION
} from '../constants/action-types';

export function addMachine(payload) {
    return {type: ADD_MACHINE, payload};
};

export function addSuspension(payload) {
    return {type: ADD_SUSPENSION, payload}
}
