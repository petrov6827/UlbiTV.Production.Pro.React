// export interface CounterState {
//     value: number
// }

import type { CounterSchema } from "entities/Counter/model/types/counterSchema";

// export interface StateSchema {
//     counter: CounterState,
// }

export interface StateSchema {
    counter: CounterSchema
}