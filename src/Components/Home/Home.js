import React from "react";
import Select from "../Select/Select";
import "./Home.css"
export default function () {
  var colors = ["red", "yellow", "green", "blue"];
  var components = [
    { title: "React", id: "react" },
    { title: "Angular", id: "angular" },
    { title: "Vue", id: "vue" },
    { title: "Ember", id: "ember" },
  ];
  return (
    <div id="selector">
      <div className="home-container">
        <div className="left">
          <h1>Colors</h1>
          <Select data={colors} typeObject={false}/>
        </div>
         <div className="right">
           <h1>Components</h1>
           <Select data={components} typeObject={true}/>
         </div>
     

      </div>
    </div>
  );
}
