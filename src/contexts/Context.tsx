import React, { Children, ReactNode } from 'react'
import { createContext } from 'react'

type ContextoType = {
    name: string,
    age: number
}

type ContextoProviderType = {
    children: React.ReactNode
}

const initialState = {
    name: 'Breno',
    age: 90
}


export const Contexto = createContext<ContextoType>(initialState);

export const ContextoProvider = ({children}: ContextoProviderType) => {
    return(
        <Contexto.Provider value={initialState}>
            {children}
        </Contexto.Provider>
    )
}
