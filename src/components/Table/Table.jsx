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
  const [items, setitem] = useState([]);
  const tablerow =[{id:2,name:'id'},{id:1,name:'name'},{id:3,name:'email'},{id:1,name:'phone'},{id:1,name:'age'}]

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
        setitem={setitem}
        filter={filter}
        setFilter={setFilter}
        users={users}
        items={items}
        setusers={setusers}
      />
      <Form
        items={items}
        setitem={setitem}
        users={users}
        setusers={setusers}
        // dismessage={dismessage}
        mode={mode}
        setMode={setMode}
        form={form}
        setForm={setForm}
      />
      <div style={{ border: "2px solid black", margin: "20px" }}>
        <table style={{ padding: "10px" }}>
          <thead>
            <tr>
              <th>profile</th>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>phone</th>
              <th>age</th>
              <th>like</th>
              <th></th>
            </tr>
          </thead>

          {users
            .filter((item) =>
              item.name.toUpperCase().includes(search.toUpperCase())
            )
            .map((user) => (
              <tbody>
                <tr>
                  <td>
                    <img src= {`https://avatars.dicebear.com/api/adventurer/:${user.id}.svg`} alt='avatar' />
                  </td>
                  {tablerow.map(row=>(<td>{user[row.name]}</td>))}
                  <td onClick={() => checklikeHandler(user.id)}>
                    {user.favorit ? <iconify-icon icon="ant-design:like-twotone" width="28" height="28"></iconify-icon> :<iconify-icon icon="ant-design:dislike-twotone" width="28" height="28"></iconify-icon>}
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
