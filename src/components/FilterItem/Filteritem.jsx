const FilterItem = ({ filter, users, setitem, setFilter,items,setusers }) => {
  const filterdata = [
    { id: 1, title: "all" },
    { id: 2, title: "like" },
    { id: 3, title: "dislike" },
  ];
  // const filterHandler =(title)=>{
  //     setFilter(title)
  // }

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

  return (
    <div>
      {filterdata.map((item) => (
        <button
          // onClick={() => checkFilter(item)}
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
