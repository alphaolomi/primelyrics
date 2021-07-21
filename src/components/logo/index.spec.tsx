import { render } from "@/tests";

import { Logo } from "./index";

describe("Logo component testing with testing-library", () => {
    const component = render(<Logo />);

    it("renders without crashing", () => {
        expect(component).toBeTruthy();
    });
});
