import { fireEvent, render } from "@/tests";

import { Button } from "./index";

describe("Button component testing with testing-library", () => {
    it("renders without crashing", () => {
        const component = render(<Button onClick={() => undefined} />);

        expect(component).toBeTruthy();
    });

    it("button is clickable", () => {
        const mockFn = jest.fn();
        const { getByTestId } = render(<Button onClick={mockFn} />);

        const btn = getByTestId("btn");
        fireEvent.click(btn);

        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
