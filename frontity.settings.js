const settings = {
  "name": "rely-trade",
  "state": {
    "frontity": {
      "url": "http://relytrade.com",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "Rely-Trade",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Products",
              "/shop/"
            ],
            [
              "Services",
              "/services/"
            ],
            [
              "About Us",
              "/about-us/"
            ],
            [
              "Contact Us",
              "/contact-us/"
            ]
          ],

          // Post Thumbnail Show & Hide option here ( Show = ture) ( Hide = false)
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }, 

          // Site link auto fetch option set here 
          // if you don't want to auto fetch then type herer "unhover"
          autoPreFetch: 'hover',
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://relytrade.com/wp-json"
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
