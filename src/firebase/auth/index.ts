import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from 'src/firebase';

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

const signInWithFacebook = () => {
  const provider = new FacebookAuthProvider();
  return signInWithPopup(auth, provider);
};

const signOut = () => {
  return auth.signOut();
};

export { signInWithGoogle, signInWithFacebook, signOut };
