import { User } from "./User";

export class Reviewer extends User {
  submitReview(review: string): void {
    console.log(`${this.username} submitted a review: ${review}`);
  }
}
