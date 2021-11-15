export interface TrackItem {
    track_id: string;
    track_name: string;
    artist_name: string;
    album_name: string;
    album_id: string;
    primary_genres: {
        music_genre_list: { music_genre: { music_genre_name: string } }[];
    };
    explicit: number;
    first_release_date: string;
}

export interface LyricItem {
    lyrics_body: string;
}

export interface Track {
    id: string;
    track: TrackItem;
}

export interface TracksList {
    tracks: Track[];
}
