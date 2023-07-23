// export interface CounterState {
//     value: number
// }

import type { CounterSchema } from "entities/Counter/model/types/counterSchema";
import type { UserSchema } from "entities/User";

// export interface StateSchema {
//     counter: CounterState,
// }

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema
}