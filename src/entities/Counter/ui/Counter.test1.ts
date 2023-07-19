import { fireEvent, screen } from "@testing-library/react";
// import { withTranslation } from "react-i18next";
import { Counter } from "./Counter";
import { ComponentRender } from "shared/lib/tests/componentRender/componentRender";

// describe('counter', () => {
// 	test('with only first param', () => {
// 		ComponentRender(<Counter />, {
//             initialState: {counter: {value: 10}}
//         })
// 		expect(screen.getByTestId('value-title')).toHaveTextContent('10');
// 	})
// })

describe ('Counter.test', () => {
    test('check', () => {
        ComponentRender(<Counter />, {
            initialState: {counter: {value: 10}}
        })
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    })
})