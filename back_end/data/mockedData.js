const users = [
    {
      "name": "Thuli Keys",
      "email": "thulikeys@example.com",
      "password": "hashedpassword2",
      "role": "Creator",
      "nftHolder": false,
      "cryptoBalance": 0,
      "companyName": null,
      "publisher": null
    },
    {
      "name": "Amahle Melodies",
      "email": "amahle@example.com",
      "password": "hashedpassword3",
      "role": "Fan",
      "nftHolder": false,
      "cryptoBalance": 50,
      "companyName": null,
      "publisher": null
    },
    {
      "name": "Sipho Strings",
      "email": "sipho@example.com",
      "password": "hashedpassword4",
      "role": "Fan",
      "nftHolder": false,
      "cryptoBalance": 100,
      "companyName": null,
      "publisher": null
    },
    {
      "name": "Jazz Waves",
      "email": "jazzwaves@example.com",
      "password": "hashedpassword5",
      "role": "Investor",
      "nftHolder": true,
      "cryptoBalance": 0,
      "companyName": null,
      "publisher": null
    },
    {
      "name": "Music Pro Co.",
      "email": "musicpro@example.com",
      "password": "hashedpassword6",
      "role": "Company",
      "nftHolder": false,
      "cryptoBalance": 0,
      "companyName": "Music Pro Co.",
      "publisher": null
    },
    {
      "name": "Lindokuhle Records",
      "email": "lindokuhle@example.com",
      "password": "hashedpassword7",
      "role": "Company",
      "nftHolder": false,
      "cryptoBalance": 0,
      "companyName": "Lindokuhle Records",
      "publisher": "creatorId"
    },
    {
      "name": "Creative Sound LLC",
      "email": "creativesound@example.com",
      "password": "hashedpassword8",
      "role": "Company",
      "nftHolder": false,
      "cryptoBalance": 0,
      "companyName": "Creative Sound LLC",
      "publisher": "creatorId"
    },
    {
      "name": "Clever Music",
      "email": "clevermusic@example.com",
      "password": "hashedpassword9",
      "role": "Fan",
      "nftHolder": false,
      "cryptoBalance": 150,
      "companyName": null,
      "publisher": null
    },
    {
      "name": "Tuning Waves",
      "email": "tuningwaves@example.com",
      "password": "hashedpassword10",
      "role": "Investor",
      "nftHolder": true,
      "cryptoBalance": 0,
      "companyName": null,
      "publisher": null
    }
]
  
  
  const reviews = [
    {
      "title": "Unstoppable Vibes",
      "artist": "DJ Zinhle",
      "album": "Indigo Girl",
      "review": "DJ Zinhle's new track is a masterpiece! The beats are out of this world. I can't stop playing it.",
      "rating": 4.8,
      "user": "user1",
      "date": "2025-01-09T10:00:00Z",
      "upvotes": 200,
      "downvotes": 5,
      "comments": [
        {
          "user": "user2",
          "comment": "Love it! Her style keeps evolving.",
          "date": "2025-01-09T12:30:00Z"
        }
      ],
      "snippetStreams": 8000,
      "shares": 150,
      "likes": 500,
      "totalMonthlyListeners": 120000,
      "snippetUrl": "https://example.com/unstoppable-vibes.mp3"
    },
    {
      "title": "Rising Star",
      "artist": "Shekhinah",
      "album": "Rose Gold",
      "review": "Shekhinah never disappoints. This song is a perfect blend of R&B and pop.",
      "rating": 4.7,
      "user": "user3",
      "date": "2025-01-09T11:00:00Z",
      "upvotes": 180,
      "downvotes": 10,
      "comments": [
        {
          "user": "user4",
          "comment": "I can't wait for her new album!",
          "date": "2025-01-09T13:00:00Z"
        }
      ],
      "snippetStreams": 5000,
      "shares": 120,
      "likes": 400,
      "totalMonthlyListeners": 95000,
      "snippetUrl": "https://example.com/rising-star.mp3"
    },
    {
      "title": "Funky Soul",
      "artist": "Lady Zamar",
      "album": "King Zamar",
      "review": "Lady Zamar brings the funk back with this track! It's got a groove that you can't resist.",
      "rating": 4.6,
      "user": "user5",
      "date": "2025-01-09T12:00:00Z",
      "upvotes": 220,
      "downvotes": 8,
      "comments": [
        {
          "user": "user6",
          "comment": "Her voice is mesmerizing!",
          "date": "2025-01-09T14:30:00Z"
        }
      ],
      "snippetStreams": 6000,
      "shares": 180,
      "likes": 350,
      "totalMonthlyListeners": 110000,
      "snippetUrl": "https://example.com/funky-soul.mp3"
    },
    {
      "title": "Soulful Rhythms",
      "artist": "Nasty C",
      "album": "Strings and Bling",
      "review": "Nasty C's lyricism is on another level. This song showcases his unique flow and creativity.",
      "rating": 5,
      "user": "user7",
      "date": "2025-01-09T13:00:00Z",
      "upvotes": 300,
      "downvotes": 2,
      "comments": [
        {
          "user": "user8",
          "comment": "This track is fire! Nasty C never disappoints.",
          "date": "2025-01-09T15:00:00Z"
        }
      ],
      "snippetStreams": 10000,
      "shares": 250,
      "likes": 600,
      "totalMonthlyListeners": 130000,
      "snippetUrl": "https://example.com/soulful-rhythms.mp3"
    },
    {
      "title": "Summer Nights",
      "artist": "Makhadzi",
      "album": "African Queen",
      "review": "This track gives off the perfect summer vibes. Makhadzi is an artist on the rise!",
      "rating": 4.5,
      "user": "user9",
      "date": "2025-01-09T14:00:00Z",
      "upvotes": 150,
      "downvotes": 5,
      "comments": [
        {
          "user": "user10",
          "comment": "Can't stop dancing to this one!",
          "date": "2025-01-09T16:00:00Z"
        }
      ],
      "snippetStreams": 4000,
      "shares": 100,
      "likes": 250,
      "totalMonthlyListeners": 90000,
      "snippetUrl": "https://example.com/summer-nights.mp3"
    },
    {
      "title": "Afro-Pop Anthem",
      "artist": "Kabza De Small",
      "album": "Piano King",
      "review": "Kabza's latest track is another hit in the Afro-Pop world. His production is unmatched.",
      "rating": 4.9,
      "user": "user11",
      "date": "2025-01-09T15:00:00Z",
      "upvotes": 350,
      "downvotes": 7,
      "comments": [
        {
          "user": "user12",
          "comment": "His sound is the future of Afrobeat.",
          "date": "2025-01-09T17:00:00Z"
        }
      ],
      "snippetStreams": 12000,
      "shares": 200,
      "likes": 750,
      "totalMonthlyListeners": 140000,
      "snippetUrl": "https://example.com/afro-pop-anthem.mp3"
    },
    {
      "title": "Electric Feel",
      "artist": "Mi Casa",
      "album": "Home Sweet Home",
      "review": "Mi Casa delivers a smooth and catchy tune in their latest release.",
      "rating": 4.4,
      "user": "user13",
      "date": "2025-01-09T16:00:00Z",
      "upvotes": 180,
      "downvotes": 10,
      "comments": [
        {
          "user": "user14",
          "comment": "The melodies are so catchy!",
          "date": "2025-01-09T18:00:00Z"
        }
      ],
      "snippetStreams": 4500,
      "shares": 130,
      "likes": 300,
      "totalMonthlyListeners": 85000,
      "snippetUrl": "https://example.com/electric-feel.mp3"
    },
    {
      "title": "The New Wave",
      "artist": "Julius Sello",
      "album": "Fresh Start",
      "review": "A refreshing new sound! Julius Sello is bringing something fresh to the music scene.",
      "rating": 4.2,
      "user": "user15",
      "date": "2025-01-09T17:00:00Z",
      "upvotes": 170,
      "downvotes": 15,
      "comments": [
        {
          "user": "user16",
          "comment": "Loving this new style!",
          "date": "2025-01-09T19:00:00Z"
        }
      ],
      "snippetStreams": 3000,
      "shares": 80,
      "likes": 220,
      "totalMonthlyListeners": 70000,
      "snippetUrl": "https://example.com/the-new-wave.mp3"
    },
    {
      "title": "Unstoppable Energy",
      "artist": "Black Motion",
      "album": "The Journey",
      "review": "Black Motion continues to amaze with their energy and rhythm. A perfect party track.",
      "rating": 4.7,
      "user": "user17",
      "date": "2025-01-09T18:00:00Z",
      "upvotes": 230,
      "downvotes": 4,
      "comments": [
        {
          "user": "user18",
          "comment": "This track is fire, can’t stop moving!",
          "date": "2025-01-09T20:00:00Z"
        }
      ],
      "snippetStreams": 8000,
      "shares": 200,
      "likes": 500,
      "totalMonthlyListeners": 100000,
      "snippetUrl": "https://example.com/unstoppable-energy.mp3"
    },
    {
      "title": "Vocal Queen",
      "artist": "Lira",
      "album": "The Soul Experience",
      "review": "Lira’s powerful vocals shine in this beautiful track. An inspiring song for all.",
      "rating": 5,
      "user": "user19",
      "date": "2025-01-09T19:00:00Z",
      "upvotes": 400,
      "downvotes": 3,
      "comments": [
        {
          "user": "user20",
          "comment": "Her voice is truly something special.",
          "date": "2025-01-09T21:00:00Z"
        }
      ],
      "snippetStreams": 15000,
      "shares": 300,
      "likes": 1000,
      "totalMonthlyListeners": 200000,
      "snippetUrl": "https://example.com/vocal-queen.mp3"
    },
    {
      "title": "The Awakening",
      "artist": "Prince Kaybee",
      "album": "DJ Vibes",
      "review": "Prince Kaybee takes us to new heights with his latest track. It’s both soulful and energetic.",
      "rating": 4.8,
      "user": "user21",
      "date": "2025-01-09T20:00:00Z",
      "upvotes": 250,
      "downvotes": 6,
      "comments": [
        {
          "user": "user22",
          "comment": "This track is lit, I love the blend of genres.",
          "date": "2025-01-09T22:00:00Z"
        }
      ],
      "snippetStreams": 9000,
      "shares": 220,
      "likes": 650,
      "totalMonthlyListeners": 115000,
      "snippetUrl": "https://example.com/the-awakening.mp3"
    }]
  