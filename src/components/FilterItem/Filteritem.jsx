import React, { useEffect } from 'react';

const FilterItem = ({ filter, users,setFilter,setitem }) => {
  const filterdata = [
    { id: 1, title: "all" },
    { id: 2, title: "like" },
    { id: 3, title: "dislike" },
  ];


  const filterHandler =(title)=>{
      setFilter(title)
  }
  useEffect(() => { checkFilter()}, [users, filter]);
  const checkFilter = () => {
    switch(filter){
      case 'like':
        setitem(users.filter(item=>item.favorit === true))
        break;
      case 'dislike':
        setitem(users.filter(item=>item.favorit === false))
        break;
      default:
        setitem(users)
    }
  };

  return (
    <div>
      {filterdata.map((item) => (
        <button
          onClick= {()=>filterHandler(item.title)}
          style={{ background: item.title === filter ? "green" : "white" }}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};

export default FilterItem;
// onClick={() => checkFilter(item)}
// {()=>filterHandler(item.title)}


// const checkFilter = (item) => {
//   if(item.title === 'all'){
//     console.log(item.title)
//     setitem(users);
//   }
//   else if (item.title === "like") {
//     setitem(users.filter((item) => item.favorit === true));
//   } else if (item.title === "dislike") {
//     setitem(users.filter((item) => item.favorit === false));
//   }
//   setFilter(item.title)
// };