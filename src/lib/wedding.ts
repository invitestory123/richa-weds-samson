export interface EventColor {
  name: string;
  hex: string;
}

export interface WeddingEvent {
  name: string;
  subtitle?: string;
  chapter: string;
  day: string;
  date: string;
  time: string;
  venueSpot: string;
  fullVenue: string;
  flow: string;
  note: string;
  colorCodeText: string;
  colors: EventColor[];
  isRestricted?: boolean;
  restrictedNotes?: string;
  invitees?: string[];
}

export const wedding = {
  bride: "Richa",
  brideFullName: "Richa Arora",
  brideParents: {
    father: "Mr. Mukesh Arora",
    mother: "Mrs. Vishakha Arora",
    combined: "Mr. Mukesh Arora & Mrs. Vishakha Arora",
    label: "D/o Mr. Mukesh Arora & Mrs. Vishakha Arora",
  },
  groom: "Samson",
  groomFullName: "Samson",
  groomParents: {
    father: "Mr. Muthukumar",
    mother: "Mrs. Tamilarasi",
    combined: "Mr. Muthukumar & Mrs. Tamilarasi",
    label: "S/o Mr. Muthukumar & Mrs. Tamilarasi",
  },
  invitationLine:
    "Together with their families, request the honour of your presence to bless the auspicious union of",
  dateLabel: "13th & 14th December 2026",
  weddingDateLabel: "Monday, 14 December 2026",
  shortDate: "13th – 14th December 2026",
  dateDays: "13th – 14th",
  dateMonthYear: "December 2026",
  countdownTarget: "2026-12-14T16:00:00+05:30",
  story: [
    "Two lives, two hearts, and two loving families coming together in eternal devotion and companionship.",
    "Under the golden sky of Panvel, we begin our greatest adventure. We would be profoundly blessed to celebrate this sacred milestone in your loving presence.",
  ],
  bgm: {
    title: "Chaap Tilak (Instrumental)",
    artist: "Mangesh Jagtap",
    youtubeId: "R64UlZn3_YY",
    youtubeUrl: "https://youtu.be/R64UlZn3_YY?si=5Qrh7uTTvnLZKAhM",
  },
  events: [
    {
      name: "Carnival (Haldi & Mehendi)",
      subtitle: "Mehendi followed by Haldi",
      chapter: "Chapter I",
      day: "Sunday",
      date: "13 December 2026",
      time: "12:00 PM onwards",
      venueSpot: "Pool Side",
      fullVenue: "Pool Side · Kaka Ji Ni Wadi, Panvel",
      flow: "Starts at 12:00 PM with Mehendi and followed by Haldi",
      note: "Sun-drenched festivities, fragrant henna, and joyful turmeric splashes by the pool.",
      colorCodeText: "Dark Pink, Yellow & Orange",
      colors: [
        { name: "Dark Pink", hex: "#D81B60" },
        { name: "Sunny Yellow", hex: "#FFD54F" },
        { name: "Tangerine Orange", hex: "#FB8C00" },
      ],
      isRestricted: false,
      invitees: [
        "Riya Arora",
        "Meet Bali",
        "Geet Bali",
        "Krishna Ved",
        "Anagha Panchal",
        "Devashree Ved",
      ],
    },
    {
      name: "Engagement & Sangeet",
      subtitle: "with Cocktail Evening",
      chapter: "Chapter II",
      day: "Sunday Evening",
      date: "13 December 2026",
      time: "7:00 PM onwards",
      venueSpot: "Sagar Palace Banquet",
      fullVenue: "Sagar Palace Banquet · Kaka Ji Ni Wadi, Panvel",
      flow: "Ring ceremony followed by cocktail toasts, musical beats, and dance celebrations",
      note: "An electric evening of heartfelt toasts, sparkling rings, and spirited performances.",
      colorCodeText: "Red & Dark Blue",
      colors: [
        { name: "Royal Red", hex: "#C62828" },
        { name: "Dark Blue", hex: "#0D47A1" },
      ],
      isRestricted: false,
      invitees: ["Dr. Amit Bali", "Dr. Geetika Bali"],
    },
    {
      name: "The Sacred Pheras",
      subtitle: "The Wedding Muhurtham",
      chapter: "Chapter III",
      day: "Monday",
      date: "14 December 2026",
      time: "4:00 PM onwards",
      venueSpot: "The Lawn",
      fullVenue: "The Lawn · Kaka Ji Ni Wadi, Panvel",
      flow: "Pheras start promptly at 4:00 PM under the mandap",
      note: "The sacred saptapadi vows and eternal blessings amidst floral grandeur under the twilight sky.",
      colorCodeText: "Anything but Red / Maroon",
      colors: [
        { name: "Champagne Gold", hex: "#E6C687" },
        { name: "Sage Emerald", hex: "#66BB6A" },
        { name: "Pastel Lilac", hex: "#AB47BC" },
        { name: "Azure Blue", hex: "#29B6F6" },
      ],
      isRestricted: true,
      restrictedNotes: "Dress Code Advisory: Anything but Red / Maroon (reserved for the bride & sacred rituals).",
      invitees: [
        "Mr. Mukesh Arora",
        "Mrs. Vishakha Arora",
        "Mr. Satyapal Arora",
        "Mrs. Krishana Arora",
        "Mr. (Late) Vijay Hadkar",
        "Mrs. (Late) Vaijayanti Hadkar",
      ],
    },
    {
      name: "Grand Reception",
      subtitle: "Celebratory Dinner & Toast",
      chapter: "Chapter IV",
      day: "Monday Evening",
      date: "14 December 2026",
      time: "7:00 PM onwards",
      venueSpot: "The Lawn",
      fullVenue: "The Lawn · Kaka Ji Ni Wadi, Panvel",
      flow: "Followed by Reception dinner & celebration at 7:00 PM",
      note: "A starlit evening of congratulations, gourmet dining, and joyous celebrations with the newlyweds.",
      colorCodeText: "Anything but Red / Maroon",
      colors: [
        { name: "Champagne Gold", hex: "#E6C687" },
        { name: "Midnight Navy", hex: "#1A237E" },
        { name: "Pastel Lavender", hex: "#9575CD" },
        { name: "Blush Rose", hex: "#F48FB1" },
      ],
      isRestricted: true,
      restrictedNotes: "Dress Code Advisory: Anything but Red / Maroon.",
      invitees: [
        "Mr. Mukesh Arora",
        "Mrs. Vishakha Arora",
        "Mr. Satyapal Arora",
        "Mrs. Krishana Arora",
        "Mr. (Late) Vijay Hadkar",
        "Mrs. (Late) Vaijayanti Hadkar",
      ],
    },
  ] as WeddingEvent[],
  venue: {
    name: "Kaka Ji Ni Wadi",
    subLocation: "Panvel, Navi Mumbai",
    address:
      "Survey No. 83/1, New Matheran Road, Opposite Akurli Bus Stop, Akurli Village, New Panvel, Navi Mumbai, Maharashtra 410206",
    hint: "Opposite Akurli Bus Stop, New Matheran Road, Panvel",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kakaji+Ni+Wadi+New+Panvel",
    mapEmbed: "https://www.google.com/maps?q=Kakaji+Ni+Wadi+New+Panvel&output=embed",
  },
  closing: "With love, gratitude, and heartfelt blessings, we eagerly await your presence.",
} as const;

export function buildIcs() {
  const start = new Date(wedding.countdownTarget);
  const end = new Date(start.getTime() + 6 * 60 * 60 * 1000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Richa and Samson//Wedding//EN",
    "BEGIN:VEVENT",
    `UID:${start.getTime()}@richa-samson`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:Wedding of ${wedding.brideFullName} & ${wedding.groomFullName}`,
    `LOCATION:${wedding.venue.name}, ${wedding.venue.address}`,
    `DESCRIPTION:Join us for the wedding celebrations of Richa Arora & Samson at Kaka Ji Ni Wadi, Panvel.\\n\\nSchedule:\\n- 13 Dec 12:00 PM: Carnival (Haldi & Mehendi) @ Pool Side (Dark Pink, Yellow & Orange)\\n- 13 Dec 7:00 PM: Engagement & Sangeet / Cocktail @ Sagar Palace Banquet (Red & Dark Blue)\\n- 14 Dec 4:00 PM: Sacred Pheras @ The Lawn (Anything but Red/Maroon)\\n- 14 Dec 7:00 PM: Reception @ The Lawn (Anything but Red/Maroon)`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
