import React, { useState } from "react";

function ObjuseState() {
  const [name, setName] = useState({ firstname: "", lastname: "" });

  const handleClicked = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={(e) => handleClicked(e)}>
      <input
        type="text"
        placeholder="Enter your firstname"
        value={name.firstname}
        onChange={(e) => setName({ ...name, firstname: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter your lastname"
        value={name.lastname}
        onChange={(e) => setName({ ...name, lastname: e.target.value })}
      />
      <h2>This is your firstname: {name.firstname}</h2>
      <h2>This is your lastname: {name.lastname}</h2>
      <button>Submit</button>
    </form>
  );
}

export default ObjuseState;
