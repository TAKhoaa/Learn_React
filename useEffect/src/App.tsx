import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users";
type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

function App() {
  const [users, setUsers] = useState<TUser[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchUsers() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((json) => setUsers(json))
    //   .catch(() => setErrorMessage("Something went wrong"));

    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => setUsers(response.data));
    try {
      const response = await axios.get(URL);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
      setErrorMessage("Something went wrong");
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <main>
      {errorMessage}
      {/*users = undefine => undefine.map*/}
      {users?.length > 0 &&
        users.map((user) => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <br />
          </div>
        ))}
    </main>
  );
}

export default App;
