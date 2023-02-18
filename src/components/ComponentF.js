import React from "react";
import { UserContext } from "../App";
import { NewContext } from "../App";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <NewContext.Consumer>
              {(New) => {
                return (
                  <div>
                    This is {user}-{New}
                  </div>
                );
              }}
            </NewContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
