import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKey, StoreWithReducerManager } from 'app/providers/store/config/StateSchema';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

export interface DynamicModuleLoaderProps {
  reducers: ReducersList,
  removeAfterUnmount?: boolean;
}
export type ReducersListEnteries = [StateSchemaKey, Reducer]
export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount } = props;
    const store = useStore() as StoreWithReducerManager;
    const dispatch = useDispatch();
    useEffect(()=>{
        Object.entries(reducers).forEach(([name, reducer])=>{
            if (!store.getState()[name as StateSchemaKey]){
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({type: `@INIT ${name} reducer`})
            }
        })
        return ()=>{
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer])=>{
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({type: `@DESTROY ${name} reducer`})
                })
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {children}
        </>
    );
}