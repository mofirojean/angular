export interface Video {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId?: string;
    channelId?: string;
    playlistId?: string;
  };
  snippet: {
    publishedAt: string; // ISO 8601 datetime string
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      [key: string]: { // Key can be "default", "medium", "high", "standard", "maxres"
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    liveBroadcastContent: LifeBroadcastContentType;
  };
}

interface YoutubeSearchResponse {
  kind: string;
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  regionCode?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Video[];
}

export type VideoType = 'video' | 'playlist' | 'channel';

export type LifeBroadcastContentType = 'upcoming' | 'live' | 'none'
