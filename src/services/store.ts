import { Action, AnyAction, configureStore, Dispatch, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import loginUser from "./users/login";
import modalsReducer from "./modals"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {Store} from 'redux'

export const store: Store = configureStore({
  reducer: {
    login: loginUser,
    modals: modalsReducer
  }
})

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
  >;

