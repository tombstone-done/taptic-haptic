import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { esp8266 } from '@renderer/shared/config/presets/esp8266';
import { Microcontroller } from '@renderer/shared/entity'

export interface MicrocontrollerState {
    list: Microcontroller[];
}

const initialState: MicrocontrollerState = {
    list: [],
}

export const microcontrollerSlice = createSlice({
    name: 'microcontroller',
    initialState,
    reducers: {
        incrementByAmount: (state, action: PayloadAction<number>) => {

        },
    },
})
