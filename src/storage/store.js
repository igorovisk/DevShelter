import * as React from 'react'
import { createContext, useState } from 'react'

const StoreContext = createContext([{}, () => {}])

export const StoreProvider = ( { children}) => {

    const [state, setState] = useState({})

    return (
        <StoreContext.Provider value = {[state, setState]}>
{children}

        </StoreContext.Provider>
    )


}