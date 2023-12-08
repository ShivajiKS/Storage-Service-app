import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
   apiKey: 'AIzaSyDNMtAv-EKfAiso9_-_XQCTTKhuhHheit0',
   authDomain: 'nextjs-storage-service-app.firebaseapp.com',
   projectId: 'nextjs-storage-service-app',
   storageBucket: 'nextjs-storage-service-app.appspot.com',
   messagingSenderId: '327812926957',
   appId: '1:327812926957:web:2697008004abe25b512be4',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

export { db, storage };
