import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    updateProfile,
    signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseApp from "../utilities/Firebase/firebase.init";

initializeFirebaseApp();
const useFirebase = () => {
    const auth = getAuth();

    // states
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("");

    // get all providers
    const googleProvider = new GoogleAuthProvider();

    // google sign in
    const signInWithGoogle = (location, navigate) => {
        setIsLoading(false);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                // saveUser(user.email, user.displayName, "PUT");
                setAuthError("");
                const destination = location?.state?.from || "/";
                navigate(destination);
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // logOut
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));
    };

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                /* getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    }) */
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { user, signInWithGoogle, isLoading, authError, logOut };
};

export default useFirebase;
