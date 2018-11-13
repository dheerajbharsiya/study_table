import { AuthorDetails } from "./author-details.model";
import { ADD_EDITOR_DATA, AuthorBioActions } from "./author-bio.actions";

// Section 1
const initialState: AuthorDetails = {
    editorData: '<div>Editor data in store</div>'
}

// Section 2
export function reducer(state: AuthorDetails = initialState, action: AuthorBioActions) {

    // Section 3
    switch(action.type) {
        case ADD_EDITOR_DATA:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}