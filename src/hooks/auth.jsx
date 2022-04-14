import React, { createContext, useContext, useState, useEffect
 } from 'react'

const AuthContext = createContext([])

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}
