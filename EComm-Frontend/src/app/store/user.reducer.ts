import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { UserInterface } from '../models/user/user.model';

export interface UserState {
  users: UserInterface[];
}

export const initialState: UserState = {
  users: []
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(UserActions.addUser, (state, { user }) => ({ ...state, users: [...state.users, user] })),
  on(UserActions.removeUser, (state, { id }) => ({
    ...state,
    users: state.users.filter(user => user.id !== id)
  }))
);
