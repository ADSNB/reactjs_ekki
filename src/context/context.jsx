import React from "react";
import { UserContext } from "./userContext";

export default React.createContext({
  UserContext: new UserContext("", "", false)
});
