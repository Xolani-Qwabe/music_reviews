import { UserProfile } from "../interfaces/UserProfile";
import {UserSettings} from "../interfaces/UserSettings";

export class User {
  userId: string;
  username: string;
  role: string;
  profile: UserProfile;
  settings: UserSettings;

  constructor(
    userId: string,
    username: string,
    role: string,
    profile: UserProfile,
    settings: UserSettings
  ) {
    this.userId = userId;
    this.username = username;
    this.role = role;
    this.profile = profile;
    this.settings = settings;
  }

  commentOnReview(reviewId: string, comment: string): void {
    console.log(`${this.username} commented on review ${reviewId}: ${comment}`);
  }

  voteOnReview(reviewId: string, isUpvote: boolean): void {
    const voteType = isUpvote ? "Upvoted" : "Downvoted";
    console.log(`${this.username} ${voteType} review ${reviewId}`);
  }
}
