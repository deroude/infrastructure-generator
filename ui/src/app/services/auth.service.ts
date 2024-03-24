import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
import firebaseConfig from '../../firebase.config.json'

export const app = initializeApp(firebaseConfig);
const provider = new GithubAuthProvider();
provider.addScope('repo');
const auth = getAuth();

export const login = async (): Promise<void> => {

    const result = await signInWithPopup(auth, provider)
    const credential = GithubAuthProvider.credentialFromResult(result);
    sessionStorage.setItem('accessToken', credential?.accessToken as string);
}

export const logout = async (): Promise<void> => {
    await signOut(auth)
    sessionStorage.removeItem('accessToken')
}