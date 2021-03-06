/*
 *  <event> two chars describing the event - ex ap=air port
 *  <type> m=map l=location p=picture w=website d=description
 *         single characters will be display via html short hand
 *         example <apl /> with display the airport location icon
 */

export const events = {
  mc: {
    d: "Molokini Crater",
    activity: "Snorkeling",
    coordinates: ["20.63104196706912", "-156.4953814313386"],
    l: "https://goo.gl/maps/dCkrLqfJKgDTwYeL8",
  },
  br: {
    d: "Black Rock",
    activity: ["Snorkeling", "Cliff Jmp", "Nite Torches"],
    coordinates: ["20.92829432002378", "-156.69654421217535"],
    l: "https://goo.gl/maps/dJVBjHsmP4uDYCQp6",
  },
  lp: {
    d: "La Perouse",
    activity: ["Snorkeling", "Lava Fields"],
    coordinates: ["20.598362345106178", "-156.42047004685332"],
    l: "https://goo.gl/maps/WRhQVfnrksBDYuar7",
  },
  pb: {
    d: "Pa'ako Beach",
  },
  lt: {
    d: "Lava Tube",
  },
  hs: {
    d: "Hanawi Stream",
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
    l: "https://goo.gl/maps/Fy4xQocqY4KAQRcS9",
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
  mr: {
    d: "Moku Roots",
    activity: "Eats",
    coordinates: ["20.886470605812168", "-156.68136337277912"],
    l: "https://g.page/MokuRoots?share",
    w: "https://www.mokuroots.com",
  },
  aa: {
    d: "A`A Roots",
    activity: "Eats",
    coordinates: ["20.98539166476081", "-156.66733045743598"],
    l: "https://goo.gl/maps/CxcZWuA1XXdDFc1a6",
    w: "https://aarootshi.com/",
  },
  vo: {
    d: "Veg Out",
    activity: "Eats",
    coordinates: ["20.914580669101177", "-156.3235006862722"],
    l: "https://goo.gl/maps/4soqwSNNdE8ZQgAR8",
    w: "https://www.veg-out.com/",
  },
  vc: {
    d: "Sprout Vegan Cafe",
    activity: "Eats",
    coordinates: ["20.68884101724564", "-156.43067031510998"],
    l: "https://g.page/sprout-vegan-cafe?share",
    w: "https://www.sproutvegancafellc.com/",
  },
  am: {
    d: "Alchemy Maui",
    activity: "Eats",
    coordinates: ["20.884190189782007", "-156.6764297016147"],
    l: "https://g.page/alchemymauibistro?share",
    w: "https://www.toasttab.com/alchemy-maui-bistro/v3/",
  },
  fs: {
    d: "Fork & Salad South",
    activity: "Eats GOOD",
    coordinates: ["20.87858088903892", "-156.45598129563388"],
    l: "https://goo.gl/maps/5hjJLfHjoj8Xc286A",
    w: "https://forkandsaladmaui.com/",
  },
  fo: {
    d: "Fork & Salad North",
    activity: "Eats GOOD",
    coordinates: ["20.87858088903892", "-156.45598129563388"],
    l: "https://goo.gl/maps/5hjJLfHjoj8Xc286A",
    w: "https://forkandsaladmaui.com/",
  },
  tf: {
    d: "Twin Falls",
    activity: ["Falls", "Swim", "Cliff Jmp"],
    coordinates: ["20.912337160603993", "-156.242876804898"],
    l: "https://goo.gl/maps/v64Cbfe4dEtjjsvh8",
    w: "https://www.twinfallsmaui.net/location/",
  },
  wf: {
    d: "Waimoku Falls",
    activity: ["Falls", "4 miles", "Near Oheo"],
    coordinates: ["20.67949875760839", "-156.05665435767108"],
    l: "https://goo.gl/maps/3hV6EWAMxEfHg1aT9",
    w: "https://www.nps.gov/hale/planyourvisit/kipahulu.htm",
  },
  pk: {
    d: "Puaa Kaa Falls",
    activity: ["Falls", ""],
    coordinates: ["20.816892684044202", "-156.12573549325325"],
    l: "https://goo.gl/maps/dgtvDW53oTigQYas6",
  },
  og: {
    d: "7 Pools of Oheo",
    activity: ["Falls", "Near Waimoku"],
    coordinates: ["20.664222433355157", "-156.04579577983048"],
    l: "https://goo.gl/maps/rFhWYqDhiExHb8dF7",
  },
  pu: {
    d: "Punalau Falls",
    activity: ["Falls", "Tough hike"],
    coordinates: ["21.023203479017152", "-156.6255636324264"],
    l: "https://goo.gl/maps/nw9ojbxdLrRvZ8Dx6",
  },
  af: {
    d: "Alelele Falls",
    activity: ["Falls", "Swim"],
    coordinates: ["20.685415433651503", "-156.09205188574475"],
    l: "https://goo.gl/maps/Z3mzFodx85nRJFjm6",
  },
  wf: {
    d: "Waikani Falls",
    activity: "Falls",
    coordinates: ["20.838616764230625", "-156.1397865730132"],
    l: "https://goo.gl/maps/MwfjnHGgWEzkcoBZ8",
  },
  kf: {
    d: "Kopiliula Falls",
    activity: ["Falls", "2 miles"],
    coordinates: ["20.818817405723888", "-156.1373294883553"],
    l: "https://goo.gl/maps/y1gFajj7YPaYhUWaA",
  },
  bs: {
    d: "Black Sand Beach",
    activity: ["blowholes", "sea arches", "rsvr days b4"],
    coordinates: ["20.788768639472828", "-156.00362512462877"],
    l: "https://goo.gl/maps/U3xsZbFiVeB6FqPo8",
    m: "StateParkVoucher.pdf",
  },
  rs: {
    d: "Red Sand Beach",
  },
  bh: {
    d: "Nakalele Blowhole",
    activity: ["blowhole", "hike"],
    coordinates: ["21.027413864310585", "-156.58849049862812"],
    l: "https://g.page/nakaleleblowhole?share",
  },
  ap: {
    d: "Maui OGG Airport",
    activity: "Fly",
    coordinates: ["20.894838558696968", "-156.43592419656764"],
    l: "https://goo.gl/maps/Lmu4SY3eJkoqaLky9",
    m: "HawaiianAirlines.pdf",
  },
  sh: {
    d: "Maui Seaside Hotel",
    activity: "Sleep",
    coordinates: ["20.891779868461168", "-156.47042378026177"],
    l: "https://goo.gl/maps/BEUuHamhka8LC7PY7",
    w: "https://www.mauiseasidehotel.com/",
    m: "MauiSeasideHotel.pdf",
  },
  ca: {
    d: "Budget Rental Car",
    activity: "Drive",
    coordinates: ["20.89257696982907", "-156.44050165027625"],
    l: "https://goo.gl/maps/si8JaVVJ4ftkKMBN6",
    m: "CarRentalVoucher.pdf",
  },
  wb: {
    d: "Wailea Beach",
    activity: "Snorkeling",
  },
};
