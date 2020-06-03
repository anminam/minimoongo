import { Record } from "immutable";
import { browserActions } from "./actions";
export const initState = new Record({
    media: {}
});


export function browserReducer(state = new initState(), { type, payload }) {
    switch (type) {
        case browserActions.MEDIA_QUERY_CHANGED:
            return state.set('media', payload.results)
        default:
            return state;
    }
}