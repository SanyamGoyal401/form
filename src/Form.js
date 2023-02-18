import "./Form.css";
import React from "react";

let Form = () => {
  return (
    <div>
      <div className="banner">
        <span className="spantext">Try it free 7 days</span> then &#8377;180/mo. thereafter
      </div>
      <div className="container">
        <input type={"text"} className="fname" placeholder={"Name"}></input>
        <input type={"email"} className="femail" placeholder={"Email"}></input>
        <input
          type={"password"}
          className="fpass"
          placeholder={"Password"}
        ></input>
        <div className="dropdown">
          <button onClick={myFunction} className="dropbtn">
            Choose Your skills....
          </button>
          <div id="myDropdown" className="dropdown-content">
            <p className="drop-items">HTML</p>
            <p className="drop-items">CSS</p>
            <p className="drop-items">JS</p>
            <p className="drop-items">JAVA</p>
          </div>
        </div>
        <div className="skill-container">
        </div>
        <input type={"submit"} value="SUBMIT" />
      </div>
    </div>
  );
};

let skill_cont = document.getElementsByClassName("skill-container")[0];
let drop_items = document.getElementsByClassName("drop-items");

  console.log(skill_cont);
  console.log(drop_items);
  for (let i = 0; i < drop_items.length; i++) {
    drop_items[i].addEventListener("click", () => {
      console.log('button clicked');
      skill_cont.appendChild(React.createElement(
        'div',
        {className : 'skill'},
        drop_items[i].textContent
      ));
    });
  }


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//   // Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
export default Form;
