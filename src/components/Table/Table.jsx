import { useState } from "react";
import Delete from "../DeleteMessage/Delete";
import FilterItem from "../FilterItem/Filteritem";
import Form from "../Form/Form";
import Search from "../Search/Search";

const Table = ({ users, setusers }) => {
  const [userid, setUserid] = useState(null);
  const [dismessage, setdisMessage] = useState("none");
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    id: 0,
    name: "",
    email: "",
    phone: "",
    age: "",
  });
  const [mode, setMode] = useState("add");
  const [filter, setFilter] = useState("all");

  const checklikeHandler = (id) => {
    setusers(
      users.map((item) =>
        item.id === id ? { ...item, favorit: !item.favorit } : item
      )
    );
  };
  const showmessage = (id) => {
    setdisMessage("block");
    setUserid(id);
  };

  // const [showform,setshowform]=useState('none')

  // const showformHandler =()=>{
  //   setshowform('block')
  // }
  const updateHandler = (user) => {
    setForm(user);
    setMode("update");
    // showformHandler()
  };

  // const notshowform =()=>{
  //     setshowform('none')
  // }
  const [items, setitem] = useState([
    {
      id: 1,
      name: "mina",
      email: "mary@gmail.com",
      phone: "338877",
      age: 24,
      favorit: true,
    },
    {
      id: 2,
      name: "saeid",
      email: "mary@gmail.com",
      phone: "338877",
      age: 24,
      favorit: false,
    },
    {
      id: 3,
      name: "paniz",
      email: "mary@gmail.com",
      phone: "338877",
      age: 24,
      favorit: true,
    },
  ]);

  return (
    <div>
      <Delete
        dismessage={dismessage}
        setdisMessage={setdisMessage}
        userid={userid}
        users={users}
        setusers={setusers}
      />

      <Search setSearch={setSearch} />
      <FilterItem
        items={items}
        setitem={setitem}
        filter={filter}
        setFilter={setFilter}
        users={users}
        setusers={setusers}
      />
      <Form
        dismessage={dismessage}
        users={users}
        setUsers={setusers}
        mode={mode}
        setMode={setMode}
        form={form}
        setForm={setForm}
      />
      <div style={{ border: "2px solid black", margin: "20px" }}>
        <table style={{ padding: "10px" }}>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>phone</th>
              <th>age</th>
              <th>like</th>
              <th></th>
            </tr>
          </thead>
          {items
            .filter((item) =>
              item.name.toUpperCase().includes(search.toUpperCase())
            )
            .map((user) => (
              <tbody>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.age}</td>
                  <td onClick={() => checklikeHandler(user.id)}>
                    {user.favorit ? "like" : "dislike"}
                  </td>
                  <td>
                    <button onClick={() => showmessage(user.id)}>delete</button>
                    <button onClick={() => updateHandler(user)}>update</button>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </div>
  );
};

export default Table;
