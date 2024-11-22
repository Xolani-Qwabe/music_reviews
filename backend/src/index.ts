  
  // Example usage
  const ordinaryUser = new User(
    "1",
    "JohnDoe",
    UserRole.ORDINARY_USER,
    {
      displayName: "John Doe",
      bio: "Music lover and occasional reviewer.",
      avatarUrl: "https://example.com/avatar/johndoe.png",
      socialLinks: { twitter: "https://twitter.com/johndoe" },
    },
    {
      theme: "light",
      notificationsEnabled: true,
      emailUpdates: false,
    }
  );
  
  ordinaryUser.commentOnReview("101", "Great review!");
  ordinaryUser.voteOnReview("101", true);
  ordinaryUser.flagReview("102", "Inappropriate content", "Contains offensive language.");
  ordinaryUser.updateProfile({ bio: "Updated bio: Avid music reviewer." });
  ordinaryUser.updateSettings({ theme: "dark" });
  ordinaryUser.shareReview("101", "twitter");
  
  const aspiringReviewer = new AspiringReviewer(
    "2",
    "JaneSmith",
    {
      displayName: "Jane Smith",
      bio: "Aspiring reviewer exploring all music genres.",
      avatarUrl: "https://example.com/avatar/janesmith.png",
      socialLinks: { instagram: "https://instagram.com/janesmith" },
    },
    {
      theme: "dark",
      notificationsEnabled: true,
      emailUpdates: true,
    }
  );
  aspiringReviewer.submitDraft("This is my draft review.");
  