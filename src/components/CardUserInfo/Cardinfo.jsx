import "./Cardinfo.style.css";
const Cardinfo = ({ infoUser }) => {
  return (
    <div className="card-container">
      <div className="card-items">
        <div className="card-image">
          <img
            src={`https://avatars.dicebear.com/api/adventurer/:${infoUser.id}.svg`}
            alt=""
          />
        </div>
        <div className="card-userinfo card-3">{infoUser.name}</div>
        <div className="card-userinfo card-2">{infoUser.email}</div>
        <div className="card-userinfo card-3">{infoUser.phone}</div>
        <div className="card-userinfo card-2">{infoUser.age}</div>
      </div>
    </div>
  );
};

export default Cardinfo;
