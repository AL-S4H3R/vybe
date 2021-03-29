import React from 'react'
import firebase from 'firebase/app'
import { auth } from '../config/firebase'

interface UserState {
    user: firebase.User | null,
    loginWithEmail: (email: string, password: string) => Promise<firebase.auth.UserCredential> | null,
    logout: () => Promise<void> | void
}

const init: UserState = {
    user: null,
    loginWithEmail: (email: string, password: string) => null,
    logout: () => {}
}

const UserContext = React.createContext(init)

export const useAuth = () => {
    return React.useContext(UserContext)
}

const UserContextProvider: React.FC = ({children}) => {
    
    const [currentUser, setCurrentUser] = React.useState<firebase.User | null>(null)
    
    //component re-renders when auth changes
    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])
    
    const loginWithEmail = (email: string, password: string) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const logout = () => {
        return auth.signOut()
    }

    const values: UserState = {
        user: currentUser,
        loginWithEmail,
        logout
    }

    return(
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider