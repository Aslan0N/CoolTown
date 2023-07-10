import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

export const Util = () => {
    const {data} = useContext(GlobalContext)
    if (data) return true;
    else return false;
  };
  