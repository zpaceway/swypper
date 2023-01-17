import { User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { firestore } from 'src/firebase';
import UserData from 'src/interfaces/UserData';

const getOrCreateUserData = async (firebaseUser: User | null) => {
  if (!firebaseUser) {
    return null;
  }

  const userId = firebaseUser.uid;
  const userDocRef = doc(firestore, 'users', userId);
  const userDoc = await getDoc(userDocRef);
  if (userDoc.exists()) {
    return userDoc.data() as UserData;
  }

  const userData: UserData = {
    name: firebaseUser.displayName || '',
    email: firebaseUser.email || '',
  };

  await setDoc(userDocRef, userData);

  return userData;
};

export { getOrCreateUserData };
