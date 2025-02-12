import { 
  getFirestore, 
  collection, 
  addDoc, 
  doc, 
  getDoc, 
  query, 
  where, 
  getDocs, 
  updateDoc, 
  deleteDoc 
} from "firebase/firestore";

import { app } from "./firebas";
import "./App.css";

const firestore = getFirestore(app);

function Demo() {

  const writeData = async () => {
    await addDoc(collection(firestore, "cities"), {
      name: "Delhi",
      pincode: 123456
    });
  };

  const subWriteData = async () => {
    await addDoc(collection(firestore, "cities/93JoxEgYlxeQCHcQZJCc/places2"), {
      sector: "Noida"
    });
  };

  // Get data by id
  const getDocument = async () => {
    const ref = doc(firestore, "cities", "93JoxEgYlxeQCHcQZJCc");
    const snap = await getDoc(ref);
    console.log(snap.data());
  };

  // Get data by condition
  const getDocumentsByQuery = async () => {
    const collectionRef = collection(firestore, "cities");
    const q = query(collectionRef, where("pincode", "==", 123456)); // Added operator `==`
    const snapshot = await getDocs(q);
    snapshot.forEach((doc) => console.log(doc.data()));
  };

  const update = async () => {
    const docRef = doc(firestore, "cities", "93JoxEgYlxeQCHcQZJCc");
    await updateDoc(docRef, {
      name: "New Delhi"
    });
  };

  const deleteData = async () => {
    const docRef = doc(firestore, "cities", "93JoxEgYlxeQCHcQZJCc");
    await deleteDoc(docRef);
    console.log("Document deleted");
  };

  return (
    <div>  
      <button onClick={writeData}>ClickMe</button>
      <button onClick={subWriteData}>Sub Write Data</button>
      <button onClick={getDocument}>Get Data</button>
      <button onClick={getDocumentsByQuery}>Get Document by Query</button>
      <button onClick={update}>Update</button>
      <button onClick={deleteData}>Delete Data</button>
    </div>
  );
}

export default Demo;
