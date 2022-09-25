import { useState } from "react";
import Delete from "../DeleteMessage/Delete";
import FilterItem from "../FilterItem/Filteritem";
import Form from "../Form/Form";
import Search from "../Search/Search";
import './Table.style.css'
import Avatarimg from "../Avatarnimation/Avatar";

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
  const [mode, setMode] = useState("save");
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

  const [showform, setshowform] = useState("none");

  return (
    <div>
      <Delete
        dismessage={dismessage}
        setdisMessage={setdisMessage}
        userid={userid}
        users={users}
        setusers={setusers}
      />
      <Avatarimg setshowform={setshowform} />
      <Form
        items={items}
        setitem={setitem}
        users={users}
        setusers={setusers}
        mode={mode}
        setMode={setMode}
        form={form}
        setForm={setForm}
        setshowform={setshowform}
        showform={showform}
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

      <div className="space-item">
        <table className='table' >
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
                  <td className="avatar-table">
                    <img src= {`https://avatars.dicebear.com/api/adventurer/:${user.id}.svg`} alt='avatar' />
                  </td>
                  {tablerow.map(row=>(<td>{user[row.name]}</td>))}
                  <td onClick={() => checklikeHandler(user.id)}>
                    {user.favorit ? <iconify-icon icon="ant-design:like-twotone" width="28" height="28"></iconify-icon> :<iconify-icon icon="ant-design:dislike-twotone" width="28" height="28"></iconify-icon>}
                  </td>
                  <td>
                    <button className="button" onClick={() => showmessage(user.id)}><iconify-icon icon="fluent:delete-12-regular" width="22"></iconify-icon></button>
                    <button className="button" onClick={() => updateHandler(user)}><iconify-icon icon="fa-regular:edit" width="24"></iconify-icon></button>
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
