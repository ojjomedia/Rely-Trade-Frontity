import Root from "./components";
import { ProductPage } from './components/Hook/handlers';

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
            "INDUSTRIAL MACHINERY",
            "/category/industrial-machinery"
          ],
          [
            "SAFETY EQUIPMENT",
            "/category/safety-equipments"
          ],
          [
            "SECURITY EQUIPMENT’S",
            "/category/security-equipments",
          ],
          [
            "MEDICAL EQUIPMENT’S",
            "/category/medical-equipments"
          ],
          [
            "COMMERCIAL EQUIPMENT’S",
            "/category/commercial-equipments"
          ],
          [
            "AQUA CULTURAL EQUIPMENT’S",
            "/category/aqua-cultural-equipments"
          ],
          [
            "LAB EQUIPMENT’S",
            "/category/lab-equipment"
          ],
          [
            "INDUSTRIAL PLANT",
            "/category/industrial-plant"
          ],
          [
            "DM PLANT",
            "/category/industrial-plant/dm-plant"
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
        libraries.source.handlers.push(ProductPage);
      }
    }
  },
  libraries: {
    html2react: {},
    source: {}
  }
};
