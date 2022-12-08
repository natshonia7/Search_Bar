import React, { useState } from "react";
import JSONDATA from "../MOCK_DATA.json";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('second')
  return (
    <div className="container App_search">
      <input type="text" 
      placeholder="Search..."
      onChange={(event)=>setSearchTerm(event.target.value)}
      />
      {JSONDATA.filter((val)=>{
          if(searchTerm == ""){
            return val
          } else if(val.first_name.toLocaleLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SearchBar;
