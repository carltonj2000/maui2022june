/*
 *  <event> two chars describing the event - ex ap=air port
 *  <type> m=map l=location p=picture w=website d=description
 *         single characters will be display via html short hand
 *         example <apl /> with display the airport location icon
 */

export const events = {
  rr: {
    d: "rail road pass",
    l: "https://goo.gl/maps/BDgX9e9Zc38S49Na6",
  },
  la: {
    d: "Lava River Cave",
    l: "https://goo.gl/maps/kMvpxGEtZCYrX4356",
    p: "./lavaRiverCavePic.png",
    m: "./lavaRiverCave.png",
    w: "https://www.flagstaff.com/lava-tubes",
  },
  wi: {
    d: "wilson",
    l: "https://goo.gl/maps/Bov8ZrUxddbEgepH6",
  },
  mc: {
    d: "Molokini Crater",
    activity: "Snorkeling",
    coordinates: ["20.63104196706912", "-156.4953814313386"],
    l: "https://goo.gl/maps/dCkrLqfJKgDTwYeL8",
  },
  br: {
    d: "Black Rock",
    activity: ["Snorkeling", "Cliff Jumping", "Night Torches"],
    coordinates: ["20.92829432002378", "-156.69654421217535"],
    l: "https://goo.gl/maps/dJVBjHsmP4uDYCQp6",
  },
  lp: {
    d: "La Perouse",
    activity: ["Snorkeling", "Lava Fields"],
    coordinates: ["20.598362345106178", "-156.42047004685332"],
    l: "https://goo.gl/maps/WRhQVfnrksBDYuar7",
  },
  cg: {
    d: "Coral Gardens",
    activity: ["Snorkeling", "Turtles", "Steep Cliffs"],
    coordinates: ["20.7895638820805", "-156.5600733065766"],
    l: "https://goo.gl/maps/B2LcW5PGpPJ6Qjt38",
  },
  ab: {
    d: "Ahihi Bay",
    activity: "Snorkeling",
    note: "Protected so only enter at north end where there is sand",
    coordinates: ["20.618568686244558", "-156.4373989906987"],
  },
  nb: {
    d: "Napili Bays",
    activity: "Snorkeling",
    coordinates: ["20.994339167179522", "-156.66781117834157"],
    l: "https://goo.gl/maps/UPikFqabizLf9S5U9",
  },
  mb: {
    d: "Makena Beach",
    activity: ["Snorkeling", "Turtles"],
    coordinates: ["20.633226974021433", "-156.4451359203141"],
    l: "https://goo.gl/maps/2XKedjhZiuPf5JDx7",
  },
  um: {
    d: "Ulua/Mokapu Beach",
    activity: "Snorkeling",
    note: "Turtle Cleaning Station 30 ft down",
    coordinates: ["20.69413154688051", "-156.4439242361692"],
    l: "https://goo.gl/maps/21J99DFXmASrqpco8",
  },
};
