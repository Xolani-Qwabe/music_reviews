

export interface UserProfile {
  displayName: string;
  bio: string;
  avatarUrl: string;
  socialLinks: { [platform: string]: string };
}