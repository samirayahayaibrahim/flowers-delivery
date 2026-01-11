import { createContext, useReducer } from 'react';

export const FlowersContext = createContext();

export const flowersReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FLOWERS':
            return {
                flowers: action.payload
                    };
    
        case 'CREATE_FLOWER':
            return {
                flowers: [action.payload, ...state.flowers]
                    }

        case 'DELETE_FLOWER':
            return {
                flowers: state.flowers.filter((w) => w._id !== action.payload._id)
                    }
            default:
            return state;
        }
};

export const FlowersContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(flowersReducer, {
        flowers: null
    });

    return (
        <FlowersContext.Provider value={{...state, dispatch }}>
            { children }
        </FlowersContext.Provider>
  );
};
