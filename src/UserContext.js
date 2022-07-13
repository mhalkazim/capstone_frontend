// Import functions to create and provision a Context Component
import React, { useReducer, createContext, useCallback } from 'react';

// Create the Context componet
export const UserContext = createContext();


// Create an initial state
const initialState = {
    "firstname": localStorage.getItem('firstname') || "",
    "lastname": localStorage.getItem('lastname') || "",
    "email": localStorage.getItem('email') || "",
    "avatar":  localStorage.getItem('avatar') || null,
    "phonenumber": localStorage.getItem('phonenumber') || "",
    "address": localStorage.getItem('address') || "",
    "jsonwebtoken": localStorage.getItem('jsonwebtoken') || undefined,
    "loginStatus": localStorage.getItem('jsonwebtoken') ? true : false,
}

// Declare the actions
const UPDATE_USER = 'UPDATE_USER';
const LOGOUT = 'LOGOUT';


function reducer(state=false, action) {
    if (action.type === UPDATE_USER) {
        return {
            ...state,
            ...action.payload
        }
    }
    if (action.type === LOGOUT) {
        return {
            "firstname": "",
            "lastname": "",
            "email": "",
            "avatar": null,
            "phonenumber": "",
            "address": "",
            "jsonwebtoken": undefined,
            "loginStatus": false
        }
    }
};


export function UserContextProvider(props) {

    const [state, dispatch] = useReducer(reducer, initialState);

    // Functions to change user state
    const updateUser = useCallback(
        function(payload) {



            // If user logs in
            if (payload.loginStatus === true) {
                // Put the details of user in localStorage
                localStorage.setItem('firstname', payload.firstname);
                localStorage.setItem('lastname', payload.lastname);
                localStorage.setItem('email', payload.email);
                localStorage.setItem('phonenumber', payload.phonenumber);
                localStorage.setItem('address', payload.address);
                localStorage.setItem('avatar', payload.avatar);
                localStorage.setItem('jsonwebtoken', payload.jsonwebtoken);

                const theAction = {
                    type: UPDATE_USER,
                    payload: payload
                }

                dispatch(
                    theAction
                );
          
            } 
            // If user logs out
            else {

                // Clear the session storage
                localStorage.clear();

                // Dispatch an empty object for the state
                const theAction = {
                    type: LOGOUT,
                }

                dispatch(
                    theAction
                ); 
            }

            

        },
        [ dispatch ]
    );

    return (
        <UserContext.Provider 
        value={
            {
                state,       // Provide consumers with current state
                updateUser // Provide consumers with function to change the current state
            }
        }>
            {props.children}
        </UserContext.Provider>
    )
};