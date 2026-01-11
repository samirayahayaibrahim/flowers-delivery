
import { FlowersContext } from "../context/flowerContext";
import { useContext } from "react";

export const useFlowersContext = () => {
    const context = useContext(FlowersContext)

    if(!context) {
        throw Error('useFlowersContext must be inside an flowersContextProvider')
    }

    return context
};
