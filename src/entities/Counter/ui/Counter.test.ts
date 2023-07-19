import { fireEvent, screen } from "@testing-library/react";
// import { withTranslation } from "react-i18next";
import { ComponentRender } from "shared/lib/tests/componentRender/componentRender";
import { Counter } from "./Counter";

// describe('counter', () => {
// 	test('with only first param', () => {
// 		ComponentRender(<Counter />, {
//             initialState: {counter: {value: 10}}
//         })
// 		expect(screen.getByTestId('value-title')).toHaveTextContent('10');
// 	})
// })

describe ('Counter.test', () => {
    test('23', () => {
        ComponentRender(<Counter />, {
            initialState: {counter: {value: 10}}
        })
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    })
})