export interface Comment {
    id: string;
    user: string;
    text: string;
    likes: number;
    isLiked: boolean;
  }

  export interface Reel {
    id: string;
    video: any;
    title: string;
    likes: number;
    comments: Comment[];
    user: string;
    isLiked: boolean;
  }

  export type VideoPlayerProps = {
    source: any;
    paused: boolean;
  };
