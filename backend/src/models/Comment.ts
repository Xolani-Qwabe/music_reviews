export class Comment {
    commentId: string;
    reviewId: string;
    authorId: string;
    content: string;
    timestamp: Date;
  
    constructor(commentId: string, reviewId: string, authorId: string, content: string) {
      this.commentId = commentId;
      this.reviewId = reviewId;
      this.authorId = authorId;
      this.content = content;
      this.timestamp = new Date();
    }
  }
  