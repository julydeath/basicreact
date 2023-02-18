import React from "react";
//import ComponentF from "./ComponentF";
import { useContext } from "react";
import { UserContext, NewContext } from "../App";

function ComponentE() {
  const user = useContext(UserContext);
  const New = useContext(NewContext);

  return (
    <div>
      {user} - {New}
    </div>
  );
}

export default ComponentE;
