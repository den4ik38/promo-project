import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,
  loginForm?: LoginSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManagerType {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface StoreWithReducerManager extends EnhancedStore<StateSchema>{
  reducerManager: ReducerManagerType
}