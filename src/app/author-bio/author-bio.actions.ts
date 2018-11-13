import { Action } from '@ngrx/store'
import { AuthorDetails } from './author-details.model';

// Section 2
export const ADD_EDITOR_DATA  = '[EDITOR_DATA] Add'
export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove'

export class AuthorBioActions implements Action {
    readonly type = ADD_EDITOR_DATA;
    constructor(public payload: AuthorDetails) {}
}
