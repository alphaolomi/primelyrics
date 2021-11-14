import { useRecoilState } from "recoil";
import remove from "lodash.remove";
import { tracksList } from "@/recoil/atoms";
import { Track } from "@/interfaces";

// interface UseTracksProps {
//     tracks?: Track[];
//     onAddTrack?: () => void;
//     onEditTrack?: () => void;
//     onRemoveTrack?: () => void;
// }

/**
 *
 * @returns { addTrack: (t: Track) => void; editTrack: (tid: Track["id"]) => void; removeTrack: (tid: Track["id"]) => void; },
 */
export const useTracks: () => [
    Array<Track>,
    {
        addTrack: (t: Track) => void;
        editTrack: (tid: Track["id"]) => void;
        removeTrack: (tid: Track["id"]) => void;
    },
] = () => {
    const [tracks, setTrack] = useRecoilState(tracksList);

    const addTrack = (t: Track) => {
        setTrack((oldTracksList) => [...oldTracksList, t]);
    };

    const editTrack = (tid: Track["id"]) => {
        setTrack((oldTracksList) => {
            const index = oldTracksList.findIndex((t) => t.id === tid);
            const newTracksList = [...oldTracksList];
            newTracksList[index] = { ...newTracksList[index] }; //, isEdit: true
            return newTracksList;
        });
    };

    const removeTrack = (tid: Track["id"]) => {
        setTrack((oldTracksList) => remove(oldTracksList, (t) => t.id !== tid));
    };

    return [tracks, { addTrack, editTrack, removeTrack }];
    // return [tracks, { addTrack, removeTrack }];
};
