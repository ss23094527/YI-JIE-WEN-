import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore,
  collection,
  doc,
  getDoc,
  updateDoc,
  getDocs
 } from "firebase/firestore";
import _ from "lodash";

const firebaseConfig = {
  apiKey: "AIzaSyDxtYOR5prMHx71EduraU07ktUn_ZoGw9c",
  authDomain: "trance-c9f6a.firebaseapp.com",
  projectId: "trance-c9f6a",
  storageBucket: "trance-c9f6a.appspot.com",
  messagingSenderId: "828035942321",
  appId: "1:828035942321:web:6b735b4e1428c2f74bdf90",
  measurementId: "G-HEMLSXSDWE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

const SongsCollection = collection(db, "Songs");

export const getSongs = async () => {
  let querySnapshot = await getDocs(SongsCollection);

  // Convert the query to a json array.
  let result = [];
  querySnapshot.forEach(async (Song) => {
    await result.push(Song.data());
  });
  return result;
};

export const getUserInfo = async () => {
  const storedUser = localStorage.getItem("user");
  const user = auth?.currentUser || JSON.parse(storedUser) || null;

  if (user) {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    const userDoc = docSnap.data();
    return {
      uid: user.uid,
      email: user.email,
      ...userDoc,
    };
  } else {
    return {}
  }
}

export const toggleFavoriteSong = async ({ SongId, uid }) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  const userDoc = docSnap.data();
  const favorites = userDoc?.favorites || [];
  if (favorites.length === _.pull(favorites, SongId).length) {
    favorites.push(SongId);
  }
  await updateDoc(docRef, { favorites });
  return favorites;
}


