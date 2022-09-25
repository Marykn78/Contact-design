import "./Avatar.style.css";

const Avatarimg = ({setshowform}) => {
    const avatadata =[{id:2},{id:3},{id:5}]
    const showformHandler = () => {
        setshowform("block");
      };
  return (
    <div className="avatar-display">
      <div className="avatar-list">
        {avatadata.map(img=><img className="avatar" alt=""  src= {`https://avatars.dicebear.com/api/adventurer/:${img.id}.svg`}/>)}
      </div>
      <div className="add">
        <button className="button" onClick={showformHandler}><iconify-icon icon="akar-icons:plus" width="28"></iconify-icon></button>
      </div>
    </div>
  );
};
export default Avatarimg;
