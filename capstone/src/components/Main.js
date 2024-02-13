import React, { useReducer, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";
import { fetchAPI, submitAPI } from "../API";

const initialState = {
  availableTimes: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_TIMES':
      return { ...state, availableTimes: action.payload };
    default:
      return state;
  }
}

export const initializeTimes = async (dispatch) => {
  const date = new Date();
  const times = await fetchAPI(date);
  dispatch({ type: 'SET_TIMES', payload: times });
};

export const updateTimes = async (selectedDate, dispatch) => {
  const times = await fetchAPI(selectedDate);
  dispatch({ type: 'SET_TIMES', payload: times });
};

const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    initializeTimes(dispatch);
  }, []);

  const submitForm = async (formData) => {
    const result = await submitAPI(formData);
    if (result) {
      navigate("/confirmed");
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={state.availableTimes}
              updateTimes={updateTimes}
              onSubmit={submitForm}
              dispatch={dispatch}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};


export default Main;