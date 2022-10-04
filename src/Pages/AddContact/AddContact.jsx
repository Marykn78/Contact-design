import '../AddContact/Form.style.css' 
import formimage from '../AddContact/image/image.webp'
const Form = ({ mode, setMode, form, setForm,users,setusers}) => {
  const inputs =[{id:1,name:'name',type:'text',placeholder:'&#xF002;'},{id:2,name:'email',type:'email',placeholder:''},{id:3,name:'phone',type:'text',placeholder:''},{id:4,name:'age',type:'number'}]
  const inputHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const addItem = (e) => {
    e.preventDefault();
    if (mode === "save") {
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
      setMode("save");
    }
    setForm({ name: "", email: "", phone: "", age: "" });
  };

  return (
    <div className='container'>
      <div className='form-container'>
        <form className='form' action=""  onSubmit={addItem}>
          {inputs.map(item=>(<div className="input-row">
            {/* <label>{item.lable}</label> */}
            <input className='input-submit' type={item.type} name={item.name} onChange={inputHandler} value={form[item.name]} placeholder={item.name} />
          </div>))}
          <div className='submit-container'>
            <button className="submit-btn" type="submit">
              {mode}
            </button>
          </div>
        </form>
        {/* <button className="button"  onClick={notshowform}>
            cancle
        </button> */}
      </div>
      <div className='formimgcontainer'>
        <img className='form-image' src={formimage} alt="form" />
      </div>
    </div>
    
  );
};

export default Form;
