interface Blog {
  id: string;
  title: string;
  content: string;
  created: string;
  tag: string;
  isUpdated: boolean;
  upvoteCount: number;
  downvoteCount: number;
  commentCount: number;
  updated: string | null;
  popularity: number | null;
  author_ID: string;
  author: any; // You might want to replace `any` with an appropriate type for author data
  comments: any[]; // You might want to replace `any` with an appropriate type for comment data
  blogVotes: any[]; // You might want to replace `any` with an appropriate type for vote data
  blogHistory: any | null; // You might want to replace `any` with an appropriate type for history data
}