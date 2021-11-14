import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Lyrics from "./_Lyrics";

describe("<Lyrics />", () => {
    test("it should mount", () => {
        render(<Lyrics />);

        const lyrics = screen.getByTestId("Lyrics");

        expect(lyrics).toBeInTheDocument();
    });
});
