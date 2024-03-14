import { database } from './connectToDb.js'
import { set,ref } from "firebase/database";
const postData = async (confessionData) => {
console.log(confessionData)
  try {
    await set(ref(database, 'dataContainer/'),confessionData);
    return true;
  } catch (err) {
    alert(err)
    return false;
  }
}
export {postData}