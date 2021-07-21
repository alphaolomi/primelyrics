import React from "react";
import { useQuery } from "react-query";

/**
 * This component is generated as an example for useQuery hook
 *
 * To learn more about React Query and data fetching,
 * please visit https://react-query.tanstack.com/
 */

 export interface Joke {
    id: number;
    type: string;
    setup: string;
    punchline: string;
}


const API_URL =
    "https://official-joke-api.appspot.com/jokes/programming/random";

export const ReactQueryExample = () => {
    const { data, refetch } = useQuery<Array<Joke>>(
        "repoData",
        () => fetch(API_URL).then((res) => res.json()),
        { refetchOnWindowFocus: false },
    );

    const handleClick = () => {
        // manually refetch
        refetch();
    };

    if (data) {
        return (
            <div>
                <header>
                    <h2>React Query Data Fetching Example</h2>
                </header>
                <main>
                    <p>Programmer Jokes {`#${data[0].id}`}</p>
                    <p>{data[0].setup}</p>
                    <p>{data[0].punchline}</p>
                    <p>
                        <button onClick={handleClick}>Give me another</button>
                    </p>
                </main>
                <footer>
                    <a
                        href="https://react-query.tanstack.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Go To Documentation
                    </a>
                </footer>
            </div>
        );
    }
    return null;
};
