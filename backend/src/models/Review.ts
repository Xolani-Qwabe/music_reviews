export class Review {
    reviewId: string;
    authorId: string;
    content: string;
    upvotes: number;
    downvotes: number;
    timestamp: Date;
    comments!:[Comment]
  
    constructor(reviewId: string, authorId: string, content: string) {
      this.reviewId = reviewId;
      this.authorId = authorId;
      this.content = content;
      this.upvotes = 0;
      this.downvotes = 0;
      this.timestamp = new Date();
    }
  
    vote(isUpvote: boolean): void {
      if (isUpvote) {
        this.upvotes++;
      } else {
        this.downvotes++;
      }
    }
  }
  