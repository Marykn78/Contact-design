// import React, { useState } from 'react';


const FilterItem = ({filter,setFilter,users,setusers}) => {
    const filterdata =[{id:1,title:'all'},{id:2,title:'like'},{id:3,title:'dislike'}]
    // const filterHandler =(title)=>{
    //     setFilter(title)
    // }

    const checkFilter =(item)=>{
        if(item.title === 'like'){
            setusers(users.filter(item=>item.favorit === true ))
        }
        else{
            setusers(item)
        }
    }

  return (
    <div>
        {filterdata.map(item=>(
            <button onClick={()=>checkFilter(item.title)} style={{background: item.title === filter ? 'red' :'white'}}>
                {item.title}
            </button>
        ))}
    </div>
  );
};

export default FilterItem;


// {()=>filterHandler(item.title)}