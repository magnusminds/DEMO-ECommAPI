import { createAction, props } from '@ngrx/store';
import { UserInterface } from '../models/user/user.model';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: UserInterface[] }>());
export const addUser = createAction('[User] Add User', props<{ user: UserInterface }>());
export const removeUser = createAction('[User] Remove User', props<{ id: number }>());
