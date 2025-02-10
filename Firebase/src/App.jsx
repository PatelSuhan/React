import './App.css';
import { app } from './Firebase';
import { getDatabase, set, ref, remove, update, onValue } from 'firebase/database';
import { useState, useEffect } from 'react';

const db = getDatabase(app);

function App() {
  // State variables for input fields
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userId, setUserId] = useState('');

  // State variable to store the users from Firebase
  const [users, setUsers] = useState({});

  // Fetch data on component mount or when data changes
  useEffect(() => {
    const usersRef = ref(db, 'users');
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setUsers(data);  // Update state with the new data
      } else {
        setUsers({});  // Clear users if no data exists
      }
    });
  }, []); // Empty dependency array means this runs once when the component mounts

  // Add data function with dynamic values
  const addData = () => {
    set(ref(db, `users/${userId}`), {
      id: userId,
      name: userName,
      age: userAge,
      city: userCity,
    })
      .then(() => console.log('Data Added Successfully'))
      .catch((err) => console.log(err));
  };

  // Delete data function
  const deleteData = () => {
    remove(ref(db, `users/${userId}`))
      .then(() => console.log('Data Deleted Successfully'))
      .catch((err) => console.log(err));
  };

  // Update data function with dynamic values
  const updateData = () => {
    update(ref(db, `users/${userId}`), {
      id: userId,
      name: userName,
      age: userAge,
      city: userCity,
    })
      .then(() => console.log('Data Updated Successfully'))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={userAge}
          onChange={(e) => setUserAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={userCity}
          onChange={(e) => setUserCity(e.target.value)}
        />
      </div>
      <button onClick={addData}>Add Data</button>
      <button onClick={deleteData}>Delete Data</button>
      <button onClick={updateData}>Update Data</button>

      
    </>
  );
}

export default App;
