import {createContext, useContext} from 'react';

export const AuthContext = createContext('auth');

export function useAuth(){
    return useContext(AuthContext);
}