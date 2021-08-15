import { useRecoilState } from "recoil";
import remove from "lodash.remove" 
import { tracksList } from "@/recoil/atoms";
import { Track } from "@/interfaces";

// function replaceItemAtIndex<T>(arr: Array<T>, index: number, newValue: T) {
//     return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
// }

// function removeItemAtIndex<T>(arr: Array<T>, index: number) {
//     return [...arr.slice(0, index), ...arr.slice(index + 1)];
// }

export const useTracks: () => [
    Array<Track>,
    {
        addTrack: (t: Track) => void;
        // editTrack: (index: number, t: Track) => void;
        removeTrack: (index: number, t: Track) => void;
    },
] = () => {
    const [tracks, setTrack] = useRecoilState(tracksList);

    const addTrack = (t: Track) => {
        setTrack((oldTracksList) => [...oldTracksList, t]);
    };

    // const editTrack = (index: number, t: Track) => {        
    //     setTrack(remove(tracks,  (tr:Track) =>{return tr.id = t.id}))
    // };
    const removeTrack = (index: number, t: Track) => {
        setTrack(remove(tracks,  (tr:Track) =>{return tr.id = t.id}))
        // setTrack(removeItemAtIndex(tracks, index));
    };

    // return [tracks, { addTrack, editTrack, removeTrack }];
    return [tracks, { addTrack, removeTrack }];
};
