const cardData = [
  {
    id: 1,
    itemName: "Zesty Tomato Pickle",
    price: 120,
    isLiked: false,
    img: {
      cover:
        "https://foodalltime.com/wp-content/uploads/2022/01/Best-Andhra-Tomato-Pickle-Recipe-Tomato-Pickle-Recipe-Tomato-Pachadi-Recipe-Tomato-Achar-Recipe-1.png",
      other: [
        "https://bazaarmantri.com/images/products/40631.jpg",
        "https://i.ytimg.com/vi/v1DBMXW5I7o/maxresdefault.jpg",
      ],
    },
  },
  {
    id: 2,
    itemName: "Lime Delight Pickle",
    price: 90,
    isLiked: true,
    img: {
      cover:
        "https://foodalltime.com/wp-content/uploads/2022/01/Best-Andhra-Tomato-Pickle-Recipe-Tomato-Pickle-Recipe-Tomato-Pachadi-Recipe-Tomato-Achar-Recipe-1.png",
      other: [
        "https://bazaarmantri.com/images/products/40631.jpg",
        "https://i.ytimg.com/vi/v1DBMXW5I7o/maxresdefault.jpg",
      ],
    },
  },
  {
    id: 3,
    itemName: "Crispy Cucumber Pickle",
    price: 75,
    isLiked: false,
    img: {
      cover: "https://bazaarmantri.com/images/products/40631.jpg",
      other: [
        "https://i.ytimg.com/vi/v1DBMXW5I7o/maxresdefault.jpg",
        "https://vegecravings.com/wp-content/uploads/2016/12/mango-pickle-recipe-step-by-step-instructions-7.jpg.webp",
      ],
    },
  },
  {
    id: 4,
    itemName: "Mango Magic Pickle",
    price: 110,
    isLiked: true,
    img: {
      cover:
        "https://vegecravings.com/wp-content/uploads/2016/12/mango-pickle-recipe-step-by-step-instructions-7.jpg.webp",
      other: [
        "https://foodalltime.com/wp-content/uploads/2022/01/Best-Andhra-Tomato-Pickle-Recipe-Tomato-Pickle-Recipe-Tomato-Pachadi-Recipe-Tomato-Achar-Recipe-1.png",
        "https://i.ytimg.com/vi/v1DBMXW5I7o/maxresdefault.jpg",
      ],
    },
  },
  {
    id: 5,
    itemName: "Spicy Chili Pickle",
    price: 85,
    isLiked: false,
    img: {
      cover: "https://i.ytimg.com/vi/v1DBMXW5I7o/maxresdefault.jpg",
      other: [
        "https://thespicemess.com/wp-content/uploads/2022/03/Gajar-Ka-Achar-25.jpg",
        "https://www.storyofakitchen.com/images/2019/02/nepali-pickled-potatoes.jpg",
      ],
    },
  },
  {
    id: 6,
    itemName: "Radish Bliss Pickle",
    price: 130,
    isLiked: true,
    img: {
      cover:
        "https://i0.wp.com/www.blissofcooking.com/wp-content/uploads/2020/09/Mooli-ka-achaar-Feature.jpg?fit=720%2C1080&ssl=1?v=1600670998",
      other: [
        "https://thespicemess.com/wp-content/uploads/2022/03/Gajar-Ka-Achar-25.jpg",
        "https://www.storyofakitchen.com/images/2019/02/nepali-pickled-potatoes.jpg",
      ],
    },
  },
  {
    id: 7,
    itemName: "Garlic Infusion Pickle",
    price: 95,
    isLiked: false,
    img: {
      cover:
        "https://thespicemess.com/wp-content/uploads/2022/03/Gajar-Ka-Achar-25.jpg",
      other: [
        "https://www.storyofakitchen.com/images/2019/02/nepali-pickled-potatoes.jpg",
        "https://thespicemess.com/wp-content/uploads/2022/03/Gajar-Ka-Achar-25.jpg",
      ],
    },
  },
  {
    id: 8,
    itemName: "Nepali Potato Pickle",
    price: 120,
    isLiked: true,
    img: {
      cover:
        "https://www.storyofakitchen.com/images/2019/02/nepali-pickled-potatoes.jpg",
      other: [
        "https://thespicemess.com/wp-content/uploads/2022/03/Gajar-Ka-Achar-25.jpg",
        "https://i0.wp.com/www.blissofcooking.com/wp-content/uploads/2020/09/Mooli-ka-achaar-Feature.jpg?fit=720%2C1080&ssl=1?v=1600670998",
      ],
    },
  },
  {
    id: 9,
    itemName: "Carrot Crunch Pickle",
    price: 80,
    isLiked: false,
    img: {
      cover:
        "https://thespicemess.com/wp-content/uploads/2022/03/Gajar-Ka-Achar-25.jpg",
      other: [
        "https://www.storyofakitchen.com/images/2019/02/nepali-pickled-potatoes.jpg",
        "https://thespicemess.com/wp-content/uploads/2022/03/Gajar-Ka-Achar-25.jpg",
      ],
    },
  },
  {
    id: 10,
    itemName: "Tangy Tamarind Pickle",
    price: 100,
    isLiked: true,
    img: {
      cover:
        "https://www.storyofakitchen.com/images/2019/02/nepali-pickled-potatoes.jpg",
      other: [
        "https://thespicemess.com/wp-content/uploads/2022/03/Gajar-Ka-Achar-25.jpg",
        "https://www.storyofakitchen.com/images/2019/02/nepali-pickled-potatoes.jpg",
      ],
    },
  },
  {
    id: 11,
    itemName: "Sweet Mango Pickle",
    price: 70,
    isLiked: false,
    img: {
      cover:
        "https://thespicemess.com/wp-content/uploads/2022/03/Gajar-Ka-Achar-25.jpg",
      other: [
        "https://www.storyofakitchen.com/images/2019/02/nepali-pickled-potatoes.jpg",
        "https://thespicemess.com/wp-content/uploads/2022/03/Gajar-Ka-Achar-25.jpg",
      ],
    },
  },
  {
    id: 12,
    itemName: "Mustard Must-Have Pickle",
    price: 110,
    isLiked: true,
    img: {
      cover:
        "https://www.storyofakitchen.com/images/2019/02/nepali-pickled-potatoes.jpg",
      other: [
        "https://thespicemess.com/wp-content/uploads/2022/03/Gajar-Ka-Achar-25.jpg",
        "https://i0.wp.com/www.blissofcooking.com/wp-content/uploads/2020/09/Mooli-ka-achaar-Feature.jpg?fit=720%2C1080&ssl=1?v=1600670998",
      ],
    },
  },
  {
    id: 13,
    itemName: "Classic Garlic Pickle",
    price: 75,
    isLiked: false,
    img: {
      cover:
        "https://thespicemess.com/wp-content/uploads/2022/03/Gajar-Ka-Achar-25.jpg",
      other: [
        "https://www.storyofakitchen.com/images/2019/02/nepali-pickled-potatoes.jpg",
        "https://thespicemess.com/wp-content/uploads/2022/03/Gajar-Ka-Achar-25.jpg",
      ],
    },
  },
  {
    id: 14,
    itemName: "Red Radish Pickle",
    price: 90,
    isLiked: true,
    img: {
      cover:
        "https://www.storyofakitchen.com/images/2019/02/nepali-pickled-potatoes.jpg",
      other: [
        "https://thespicemess.com/wp-content/uploads/2022/03/Gajar-Ka-Achar-25.jpg",
        "https://www.storyofakitchen.com/images/2019/02/nepali-pickled-potatoes.jpg",
      ],
    },
  },
  {
    id: 15,
    itemName: "Lasting Lemon Pickle",
    price: 105,
    isLiked: false,
    img: {
      cover:
        "https://thespicemess.com/wp-content/uploads/2022/03/Gajar-Ka-Achar-25.jpg",
      other: [
        "https://www.storyofakitchen.com/images/2019/02/nepali-pickled-potatoes.jpg",
        "https://thespicemess.com/wp-content/uploads/2022/03/Gajar-Ka-Achar-25.jpg",
      ],
    },
  },
];

export { cardData };
