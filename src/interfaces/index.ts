export interface TrackItem {
    track_id: string;
    track_name: string;
    artist_name: string;
    album_name: string;
}

export interface Track {
    id: string;
    track: TrackItem;
}

export interface TracksList {
    tracks: Track[];
}
