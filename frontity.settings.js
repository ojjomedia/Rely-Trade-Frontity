const settings = {
  "name": "rely-trade",
  "state": {
    "frontity": {
      "url": "http://app.relytrade.com",
      "title": "Rely Trade",
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
              "/products/"
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
          thumbnal: {
            showOnList: true,
            showOnPost: true
          }, 

          // Site link auto fetch option set here 
          // if you don't want to auto fetch then type herer "unhover"
          autoPreFetch: 'unhover',
          
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          prefix: "/wp-json",
          api: "http://app.relytrade.com/wp-json",
          params: {
            per_page: 100,
            // type: ["post", "page"],
          },
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
