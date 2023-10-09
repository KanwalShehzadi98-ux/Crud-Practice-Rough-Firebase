# Crud-Practice-Rough-Firebase
1. First the react setup is made <br>
2. Then the firebase setup is made
3. Then a connection is made with firebase using collection(db,"users")
4. Then we get the data using getDocs(ref) function
5. Then for Adding users we used firebase method addDoc(ref,{name:newName,age:Number(newAge)})
6. Then for Updating the data updateDoc(newRef,newAgeBeingCalculated) is used while newRef = doc(db,"users,id)
7. Then for deleting the data deleteDoc(newRef) is used while newRef = doc(db,"users,id)
