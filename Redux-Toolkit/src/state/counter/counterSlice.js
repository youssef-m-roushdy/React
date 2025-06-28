import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// This is a slice of the Redux store that manages the counter state.
// It defines the initial state and any reducers that can modify the state.
// In this case, the initial state is an object with a single property `value` set
const initalState = {
  value: 0,
};

// The createSlice function from Redux Toolkit is used to create a slice of the store.
// It takes an object with the name of the slice, the initial state, and an object
const counterSlice = createSlice({
  name: "counter",
  initialState: initalState,
  reducers: {
    increament: (state) => {
      // This reducer increments the value in the state by 1.
      state.value += 1;
    },
    decreament: (state) => {
      // This reducer decrements the value in the state by 1.
      state.value -= 1;
    },
    increamentByAmount: (state, action) => {
      // This reducer increments the value in the state by a specified amount.
      state.value += action.payload;
    }
  },
  extraReducers: (builder) => {
    // This is where we handle asynchronous actions using createAsyncThunk.
    // The `builder` object allows us to define cases for different states of the async action.
    // In this case, we handle the pending and fulfilled states of the `increamentAsync` action.
    // When the action is pending, we log a message to the console.
    // When the action is fulfilled, we update the state with the payload returned from the async operation.
    // This is useful for handling side effects or asynchronous operations in Redux.
    builder.addCase(increamentAsync.pending, () => {
      console.log("Incrementing pending...");
    }).addCase(increamentAsync.fulfilled, (state, action) => {
      state.value += action.payload;
    });
  }
});


// This is an asynchronous action creator that uses createAsyncThunk.
// It takes an amount as an argument and returns a promise that resolves after 1 second.
// This simulates an asynchronous operation, such as an API call.
export const increamentAsync = createAsyncThunk(
    "counter/increamentAsync",
    async (amount) => {
        // Simulate an asynchronous operation (like an API call)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(amount);
            }, 1000);
        });
    }
)

export const { increament, decreament, increamentByAmount } = counterSlice.actions;

export default counterSlice.reducer;