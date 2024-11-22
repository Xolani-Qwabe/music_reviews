export class Vote {
    voteId: string;
    reviewId: string;
    userId: string;
    isUpvote: boolean;
  
    constructor(voteId: string, reviewId: string, userId: string, isUpvote: boolean) {
      this.voteId = voteId;
      this.reviewId = reviewId;
      this.userId = userId;
      this.isUpvote = isUpvote;
    }
  }
  