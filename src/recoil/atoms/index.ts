import { atom } from "recoil";
import { Atoms } from "@/recoil/constants";
import { Track } from "@/interfaces";

/**
 * This file is generated as an example of Recoil Atoms
 *
 * To learn more about Recoil and state management,
 * please visit https://recoiljs.org/
 */

export const counter = atom({
    key: Atoms.Counter,
    default: 0,
});

export const searchText = atom({
    key: Atoms.SearchText,
    default: "",
});

export const DefaultItemPerPage = 10;
export const itemPerPage = atom({
    key: Atoms.ItemPerPage,
    default: DefaultItemPerPage,
});

export const heading = atom({
    key: Atoms.Heading,
    default: 0,
});

export const tracksList = atom<Array<Track>>({
    key: Atoms.TracksList,
    default: [],
});
