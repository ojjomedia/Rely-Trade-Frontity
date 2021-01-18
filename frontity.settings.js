const settings = {
  name: "rely-trade",
  state: {
    frontity: {
      url: "http://app.relytrade.com",
      title: "Rely Trade",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "Rely-Trade",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Products", "/products/"],
            ["Services", "/services/"],
            ["About Us", "/about-us/"],
            ["Contact Us", "/contact-us/"],
          ],
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          prefix: "/wp-json",
          api: "http://15.207.59.25/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/yoast",
    "frontity-contact-form-7",
  ],
};

export default settings;
