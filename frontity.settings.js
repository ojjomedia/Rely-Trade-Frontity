const settings = {
  "name": "rely-trade",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "Rely-Trade",
      // "state": {
      //   "theme": {
      //     "menu": [
      //       [
      //         "Home",
      //         "/"
      //       ],
      //       [
      //         "Nature",
      //         "/category/nature/"
      //       ],
      //       [
      //         "Travel",
      //         "/category/travel/"
      //       ],
      //       [
      //         "Japan",
      //         "/tag/japan/"
      //       ],
      //       [
      //         "About Us",
      //         "/about-us/"
      //       ]
      //     ],
      //     "featured": {
      //       "showOnList": false,
      //       "showOnPost": false
      //     }
      //   }
      // }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://test.frontity.org/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/yoast",
    "frontity-contact-form-7"
  ]
};

export default settings;
