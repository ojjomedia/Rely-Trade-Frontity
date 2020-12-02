import Root from "./components";
import { ProductPage, ProductItem } from './components/Hook/handlers';

export default {
  name: "Rely-Trade",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      colors: {
        gray: {
          base: "#666",
          light: "#dddddd",
          lighter: "#F5EFE0",
          lighttext: "#fff",
        },
        primary: "#7eb942",
        secondary: "#3DB7E8",
        warning: "#E77E22",
        headerbtmbg: "#444444",
        footer: "#eeeeee",
        footerBottomBg: "#dddddd",
        bodyBg: "#ffffff",
        text: "#444444",
      },

      // Site link auto fetch option set here 
      // if you don't want to auto fetch then type herer "unhover"
      autoPreFetch: "",

      /**
       * At the moment, we only include the ascii characters of Inter font.
       * Values can be "us-ascii" | "latin" | "all"
       */
      fontSets: "all",

      // Categorires list on sidebar 
      categorires: {
        list: [
          [
            "INDUSTRIAL",
            "/category/industrial/"
          ],
          [
            "WATER & WASTEWATER",
            "/category/water-wastewater/"
          ],
          [
            "HEALTH & SAFETY",
            "/category/health-safety/",
          ],
          [
            "SECURITY ",
            "/category/security/"
          ],
          [
            "TEXTILE LAB CONSUMABLE",
            "/category/textile-lab-consumable/"
          ],
          [
            "LABORATORY",
            "/category/laboratory/"
          ],
          [
            "INDUSTRIAL PLANT",
            "/category/industrial-plant/"
          ],
          [
            "MEDICAL",
            "/category/medical/"
          ],
          [
            "COMMERCIAL",
            "/category/commercial/"
          ],
          [
            "AQUA CULTURAL",
            "/category/aqua-cultural/"
          ],
          [
            "AGRICULTURAL",
            "/category/agricultural/"
          ],
          [
            "OTHERS",
            "/category/others/"
          ]
        ]
      },
     
      // Menu for footer 
      information: {
        list: [
          [
            "About Us",
            "/about-us"
          ],
          [
            "Contact Us",
            "/contact-us"
          ],
          [
            "Terms & Condition",
            "/terms-condition"
          ],
          [
            "Why Rely Trade",
            "/why-rely-trade"
          ]
        ]
      },
      myaccount: {
        list: [
          [
            "Products",
            "/products"
          ],
          [
            "Services",
            "/services"
          ],
          [
            "Privacy Policy",
            "/privacy-policy"
          ],
        ]
      }
    },
    },

    
  actions: {
    theme: {
      init: ({ libraries }) => {
        libraries.source.handlers.push(ProductPage, ProductItem);
      }
    }
  },
  libraries: {
    html2react: {},
    source: {}
  }
};
