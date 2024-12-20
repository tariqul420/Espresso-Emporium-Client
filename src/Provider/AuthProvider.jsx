import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/Firebase'
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState('')

    const socialAuth = async (provider) => {
        setLoading(true)
        try {
            await signInWithPopup(auth, provider);
            toast.success("Login Successful.");
        } catch (error) {
            if (error.code === "auth/account-exists-with-different-credential") {
                toast.error("User already exists!");
            }
        }
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoading(true)
        setUser(null)
        return signOut(auth)
    }

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    const resetEmail = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                if (currentUser.emailVerified) {
                    setUser(currentUser)
                } else {
                    setUser(null)
                }
            } else {
                setUser(null)
            }
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }
    }, [])

    const authData = {
        socialAuth,
        createUser,
        signInUser,
        signOutUser,
        updateUserProfile,
        resetEmail,
        setUser,
        setLoading,
        setEmail,
        emailVerification,
        user,
        loading,
        email
    }


    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    )
};

AuthProvider.propTypes = {
    children: PropTypes.array.isRequired
}
export default AuthProvider;