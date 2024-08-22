import { useState } from "react";
import "./App.css";

function App() {
  //uncontrol component : handle by DOM
  // const refName = useRef<any>();
  // const refDesc = useRef<any>();
  // const [name, setName] = useState("");
  // const [genders, setGenders] = useState("male");
  const [users, setUsers] = useState<any[]>([]);

  const [form, setForm] = useState({
    name: "",
    genders: "male",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setUsers([...users, { name: form.name, genders: form.genders }]);
    setForm({ name: "", genders: "male" });
    // setName("");
    // setGenders("male");
  };
  // const handleChangeName = (e: any) => {
  //   setForm({ ...form, name: e.target.value });
  //   // setName(e.target.value);
  // };

  // const handleChangeGenders = (e: any) => {
  //   setForm({ ...form, genders: e.target.value });
  // setGenders(e.target.value);
  // };

  const handleChangeFormData = (e: any, field: string) => {
    setForm({
      ...form,
      //update data
      [field]: e.target.value,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="text-center ">
        <label className="p-2">Name</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => handleChangeFormData(e, "name")}
        />
        <br />
        <br />
        <select
          value={form.genders}
          onChange={(e) => handleChangeFormData(e, "genders")}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />
        <button
          type="submit"
          className="border-black bg-black text-cyan-50 rounded pb-2"
        >
          submit
        </button>
      </form>

      <ul>
        {users.map((user) => (
          <li>
            <p>Name : {user.name}</p>
            <p>Gender : {user.genders}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
