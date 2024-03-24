import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
import firebaseConfig from '../../firebase.config.json'

const app = initializeApp(firebaseConfig);
const provider = new GithubAuthProvider();
provider.addScope('repo');
const auth = getAuth();

export const login = () => signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;

        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user)
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
    });

export const logout = signOut(auth)
    .then(console.log)
    .catch(console.error)