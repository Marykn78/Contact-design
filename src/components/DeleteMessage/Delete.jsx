const Delete = ({dismessage,setdisMessage,userid,users,setusers}) => {
  const deleteHandler = () => {
    setusers(users.filter((item) => item.id !== userid));
    notshowmessage();
  };
  const notshowmessage=()=>{
    setdisMessage('none')
  };
  return (
    <div>
      <div style={{ display: dismessage }}>
        <p>are you sure to delete?</p>
        <button onClick={deleteHandler}>yes</button>
        <button onClick={notshowmessage}>No</button>
      </div>
    </div>
  );
};

export default Delete;
