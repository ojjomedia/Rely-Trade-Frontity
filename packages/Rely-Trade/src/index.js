import Root from "./components";

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
    theme: {}
  }
};
