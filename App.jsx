import { useEffect, useState } from "react";
import { collection, getDocs,addDoc ,updateDoc,doc,deleteDoc} from 'firebase/firestore';
import { db } from './firebase-config';

function App() {
  const myCollectionRef = collection(db, "users");
  const [users, setUsers] = useState([]);
  const [name,setName] = useState("");
  const [age,setAge] = useState(0);
  const deleteUsers = async (id) => {
    const newCollectionRef = doc(db,"users",id);
    await deleteDoc(newCollectionRef,id);
  }
  const updateUsers = async (id,age) => {
    const newAge = {age:age+1};
    const newCollectionRef = doc(db,"users",id);
    await updateDoc(newCollectionRef,newAge);
  }
  const createUsers = async () => {
    await addDoc(myCollectionRef,{name:name,age:Number(age)})
  }
  useEffect(() => {
    const displayUsers = async () => {
      const myData = await getDocs(myCollectionRef)
      setUsers(myData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    displayUsers();
  }, [])
  return (
    <div>
    <input onChange = {(e) => setName(e.target.value)} type = "text" placeholder = "name"/>
    <input onChange = {(e) => setAge(e.target.value)} type = "number" placeholder = "age"/>
    <button onClick = {createUsers}>CREATE USER</button>
      {
        users.map((user) => {
          return (
            <div key = {user.id}>
              <div>{user.name}</div>
              <div>{user.age}</div>
              <button onClick = {() => updateUsers(user.id,user.age)}>UPDATE USER AGE</button>
              <button onClick = {() => deleteUsers(user.id)}>DELETE USER</button>
            </div>
          )
        })
      }
    </div>
  )
}
export default App;
