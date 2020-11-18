import Root from "./components";
import { postHandler } from './components/Hook/handlers';

const PostHandler = {
  pattern: '/product/',
  priority: 10,
  func: async ({ route, params, state, libraries }) => {
    state.source.data["/product/"].isPostType = true;
    const archive = libraries.source.handlers.find(
      handler => handler.name == "Products"
    );
    await archive.func({ route, params, state, libraries });
  }
}

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

      // Categorires list on sidebar 
      categorires: {
        list: [
          [
            "INDUSTRIAL MACHINERY",
            "/INDUSTRIAL/"
          ],
          [
            "SAFETY EQUIPMENT",
            "/SAFETY/"
          ],
          [
            "SECURITY EQUIPMENT’S",
            "/SECURITY/",
          ],
          [
            "MEDICAL EQUIPMENT’S",
            "/MEDICAL/"
          ],
          [
            "COMMERCIAL EQUIPMENT’S",
            "/COMMERCIAL/"
          ],
          [
            "AQUA CULTURAL EQUIPMENT’S",
            "/AQUA/"
          ],
          [
            "LAB EQUIPMENT’S",
            "/LAB/"
          ],
          [
            "INDUSTRIAL PLANT",
            "/PLANT/"
          ],
          [
            "DM PLANT",
            "/DM/"
          ],
          [
            "OTHER’S",
            "/OTHER’S/"
          ]
        ]
      },
    }
  },
  actions: {
    theme: {
      init: ({ libraries }) => {
        libraries.source.handlers.push(postHandler);
      }
    }
  },
  libraries: {
    html2react: {},
    source: {
      handlers: [postHandler]
    }
  }
};
