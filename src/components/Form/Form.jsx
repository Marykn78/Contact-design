import { useState } from "react";

const Form = ({users,setUsers,mode,setMode,form,setForm}) => {


    const inputHandler =(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const addItem =(e)=>{
        e.preventDefault();
        if(mode === 'add'){
            setUsers([...users,{id:Math.floor(Math.random()*1000),name:form.name,email:form.email,phone:form.phone,age:form.age,favorit:false}])
        }
        else{
            setUsers(users.map(item=>item.id === form.id ? form : item))
        }
        setForm({name:'',email:'',phone:'' ,age:''})
        setMode('add')
    }

    const [showform,setshowform]=useState('none')
    const showformHandler =()=>{
        setshowform('block')
    }
    const notshowform =()=>{
        setshowform('none')
    }
  return (
    <div>
      <form action=""  style={{display:showform}} onSubmit={addItem}>
        <input type="text" name="name"  onChange={inputHandler} value={form.name}/>
        <input type="text" name="email"  onChange={inputHandler}  value={form.email}/>
        <input type="text" name="phone"  onChange={inputHandler}  value={form.phone}/>
        <input type="text" name="age"  onChange={inputHandler}  value={form.age} />
        {/* <input type="text" />
        <input type="text" /> */}
        <button type='submit' onClick={notshowform}>save</button>
      </form>
      <button onClick={showformHandler} >Add New</button>
    </div>
  );
};

export default Form;
