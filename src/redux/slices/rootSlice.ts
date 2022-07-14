import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name:'root',
    initialState:{
        make: "Ferrari",
        model: "SF90 Stradale",
        year: "2022",
        top_speed: "220mph",
        max_horsepower: "175",
        seats: "2",
        price: 50000000.00,
        length: "2.6 meters",
        country: "Italy"
    },
    reducers:{
        chooseMake:(state, action) =>{state.make = action.payload},
        chooseModel:(state, action) =>{state.model = action.payload},
        chooseYear:(state, action) =>{state.year = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const {chooseMake,
                chooseModel, 
                chooseYear, 
            } = rootSlice.actions;