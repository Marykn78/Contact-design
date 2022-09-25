import { useState } from "react";

const Form = ({ mode, setMode, form, setForm,items, setitem,users,setusers }) => {

  const inputs =[{id:1,name:'name'},{id:2,name:'email'},{id:3,name:'phone'},{id:4,name:'age'}]
  const inputHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const addItem = (e) => {
    e.preventDefault();
    if (mode === "add") {
      setusers([
        ...users,
        {
          id: Math.floor(Math.random() * 1000),
          name: form.name,
          email: form.email,
          phone: form.phone,
          age: form.age,
          favorit: false,
        },
      ]);
    } else {
      setusers(users.map((item) => (item.id === form.id ? form : item)));
    }
    setForm({ name: "", email: "", phone: "", age: "" });
    setMode("add");
  };

  const [showform, setshowform] = useState("none");
  const showformHandler = () => {
    setshowform("block");
  };
  const notshowform = () => {
    setshowform("none");
  };
  return (
    <div>
      <form action="" style={{ display: showform }} onSubmit={addItem}>
        {inputs.map(item=>(<input name={item.name} onChange={inputHandler} value={form[item.name]} />))}
        {/* <input
          type="text"
          name="name"
          onChange={inputHandler}
          value={form.name}
        />
        <input
          type="text"
          name="email"
          onChange={inputHandler}
          value={form.email}
        />
        <input
          type="text"
          name="phone"
          onChange={inputHandler}
          value={form.phone}
        />
        <input
          type="text"
          name="age"
          onChange={inputHandler}
          value={form.age}
        /> */}
        <button type="submit" onClick={notshowform}>
          {mode}
        </button>
      </form>
      <button onClick={showformHandler}>Add New</button>
    </div>
  );
};

export default Form;

// ,setForm,showform,setshowform,showformHandler
