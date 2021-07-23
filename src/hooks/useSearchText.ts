import { useRecoilState } from "recoil";

import { searchText } from "@/recoil/atoms";

export const useSearchText: () => [
    string,
    { setSearchText: (s: string) => void },
] = () => {
    const [text, setText] = useRecoilState(searchText);

    const setSearchText = (s: string) => {
        setText(s);
    };

    return [text, { setSearchText }];
};
