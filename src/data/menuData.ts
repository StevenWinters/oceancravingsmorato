const menuData = [
  {
    id: 1,
    menu: "Seafood Bags",
    description: "With corn, lemon & 1 dipping sauce",
    dishes: [
      {
        id: 1,
        title: "Seafood Boil",
        description: "(crabs, shrimps, mussels, clams)",
        prices: [
          { id: 1, label: "S - 850php (2-3 pax)" },
          { id: 2, label: "L - 1,350php (4-5 pax)" },
        ],
      },
      {
        id: 2,
        title: "Crab & Shrimp",
        prices: [
          { id: 1, label: "S - 950php (2-3 pax)" },
          { id: 2, label: "L - 1,400php (4-5 pax)" },
        ],
      },
      {
        id: 3,
        title: "Western Seafood Boil",
        description: "(crabs, shrimps, crawfish)",
        prices: [
          { id: 1, label: "S - 1,100php (2-3 pax)" },
          { id: 2, label: "L - 1,600php (4-5 pax)" },
        ],
      },
      {
        id: 4,
        title: "Premium Seafood Boil",
        description: "(baby lobsters, crabs, shrimps, crawfish)",
        prices: [{ id: 1, label: "L - 1,700php (5 pax)" }],
      },
      {
        id: 5,
        title: "Mud Crabs (Alimango)",
        description: "",
        prices: [{ id: 1, label: "1,100php per KG, 3-5 pcs" }],
      },
      {
        id: 6,
        title: "Blue Crabs (Alimasag)",
        description: "",
        prices: [{ id: 1, label: "750php per KG, 7-8 pcs" }],
      },
      {
        id: 7,
        title: "Shrimps (Suahe)",
        description: "",
        prices: [{ id: 1, label: "850php per KG, 25-30 pcs" }],
      },
      {
        id: 8,
        title: "Tiger Prawns (Sugpo)",
        description: "",
        prices: [{ id: 1, label: "1,300php per KG, 10-12 pcs" }],
      },
      {
        id: 9,
        title: "Baby Lobsters",
        description: "",
        prices: [{ id: 1, label: "1,250php per KG, 10-12 pcs" }],
      },
      {
        id: 10,
        title: "Crawfish",
        description: "",
        prices: [{ id: 1, label: "1,350php per KG, 25-28 pcs" }],
      },
    ],
  },
  {
    id: 2,
    menu: "Others",
    dishes: [
      {
        id: 11,
        title: "Creamy and Cheesy Baked Oysters",
        description: "",
        prices: [
          { id: 1, label: "S - 300 php, 12-15 pcs" },
          { id: 2, label: "L - 500 php, 22-24 pcs" },
        ],
      },
      {
        id: 12,
        title: "Creamy and Cheesy Baked Mussels",
        description: "",
        prices: [{ id: 1, label: "L - 400 php, 40-50 pcs" }],
      },
    ],
  },
  {
    id: 3,
    menu: "Specials",
    description: "With 1 bottle sauce, corn & lemon",
    dishes: [
      {
        id: 13,
        title: "Alaskan King Crab",
        description: "(1 whole AKC is approximately 2.5 - 4 KG)",
        prices: [{ id: 1, label: "6000 php per KG" }],
      },
    ],
  },
];

export default menuData;
