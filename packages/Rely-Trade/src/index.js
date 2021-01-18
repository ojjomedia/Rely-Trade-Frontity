import Root from "./components";
import { ProductPage } from "./components/Hook/handlers";

export default {
  name: "Rely-Trade",
  roots: {
    theme: Root,
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

      // Post Thumbnail Show & Hide option here ( Show = ture) ( Hide = false)
      thumbnal: {
        showOnList: true,
        showOnPost: true,
      },

      // Site link auto fetch option set here
      // if you don't want to auto fetch then type herer "unhover"
      // if you want fetch all data at once type here "all"
      autoPreFetch: "all",

      /**
       * At the moment, we only include the ascii characters of Inter font.
       * Values can be "us-ascii" | "latin" | "all"
       */
      fontSets: "all",

      // Categorires list on sidebar
      categorires: [
        {
          name: "INDUSTRIAL",
          link: "/category/industrial/",
          submenu: [
            {
              name: "Air Blower",
              link: "/category/industrial/air-blower/",
            },
            {
              name: "Chemical Mixing Machine",
              link: "/category/industrial/chemical-mixing-machine/",
            },
            {
              name: "Dehumidifier",
              link: "/category/industrial/dehumidifier/",
            },
            {
              name: "Digital Weight Scale",
              link: "/category/industrial/digital-weight-scale/",
            },
            {
              name: "DO Controller",
              link: "/category/industrial/do-controller/",
            },
            {
              name: "Dosing Pump",
              link: "/category/industrial/dosing-pump/",
            },
            {
              name: "Flow Meter",
              link: "/category/industrial/flow-meter/",
            },
            {
              name: "pH Controller",
              link: "/category/industrial/ph-controller/",
            },
            {
              name: "Pump",
              link: "/category/industrial/pump/",
            },
            {
              name: "Others",
              link: "/category/industrial/others-industrial/",
            },
          ],
        },
        {
          name: "WATER & WASTEWATER",
          link: "/category/water-wastewater/",
          submenu: [
            {
              name: "Air Blower",
              link: "/category/water-wastewater/air-blower-water-wastewater/",
            },
            {
              name: "Air Diffuser",
              link: "/category/water-wastewater/air-diffuser/",
            },
            {
              name: "Automatic Dosing System",
              link: "/category/water-wastewater/automatic-dosing-system/",
            },
            {
              name: "Chemical Dosing Pump",
              link: "/category/water-wastewater/chemical-dosing-pump/",
            },
            {
              name: "Chemical Mixer",
              link: "/category/water-wastewater/chemical-mixer/",
            },
            {
              name: "Chemicals",
              link: "/category/water-wastewater/chemicals/",
            },
            {
              name: "Clarifier Tank Media",
              link: "/category/water-wastewater/clarifier-tank-media/",
            },
            {
              name: "Flow Meter",
              link: "/category/water-wastewater/flow-meter-water-wastewater/",
            },
            {
              name: "MBBR Media",
              link: "/category/water-wastewater/mbbr-media/",
            },
            {
              name: "Online Monitoring System",
              link: "/category/water-wastewater/online-monitoring-system/",
            },
            {
              name: "Pump",
              link: "/category/water-wastewater/pump-water-wastewater/",
            },
            {
              name: "Scrapper",
              link: "/category/water-wastewater/scrapper/",
            },
            {
              name: "Screening System",
              link: "/category/water-wastewater/screening-system/",
            },
            {
              name: "Sludge Dewatering Machine",
              link: "/category/water-wastewater/sludge-dewatering-machine/",
            },
            {
              name: "Vessel",
              link: "/category/water-wastewater/vessel/",
            },
          ],
        },
        {
          name: "HEALTH & SAFETY",
          link: "/category/health-safety/",
          submenu: [
            {
              name: "Apron",
              link: "/category/health-safety/apron/",
            },
            {
              name: "Boiler Room Dress",
              link: "/category/health-safety/boiler-room-dress/",
            },
            {
              name: "Chemical Spill Kit",
              link: "/category/health-safety/chemical-spill-kit/",
            },
            {
              name: "Chemical Suit",
              link: "/category/health-safety/chemical-suit/",
            },
            {
              name: "Ear Protector",
              link: "/category/health-safety/ear-protector/",
            },
            {
              name: "Eyewash Station",
              link: "/category/health-safety/eyewash-station/",
            },
            {
              name: "Fire Safety Equipment",
              link: "/category/health-safety/fire-safety-equipment/",
            },
            {
              name: "Gum Boot",
              link: "/category/health-safety/gum-boot/",
            },
            {
              name: "Hand Gloves",
              link: "/category/health-safety/hand-gloves/",
            },
            {
              name: "Rain Coat",
              link: "/category/health-safety/rain-coat/",
            },
            {
              name: "Respiratory Mask",
              link: "/category/health-safety/respiratory-mask/",
            },
            {
              name: "Safety Belt",
              link: "/category/health-safety/safety-belt/",
            },
            {
              name: "Safety Goggles",
              link: "/category/health-safety/safety-goggles/",
            },
            {
              name: "Safety Helmet",
              link: "/category/health-safety/safety-helmet/",
            },
            {
              name: "Safety Shoe",
              link: "/category/health-safety/safety-shoe/",
            },
            {
              name: "Safety Vest",
              link: "/category/health-safety/safety-vest/",
            },
            {
              name: "Secondary Containment",
              link: "/category/health-safety/secondary-containment/",
            },
            {
              name: "Others",
              link: "/category/health-safety/others-health-safety/",
            },
          ],
        },
        {
          name: "SECURITY ",
          link: "/category/security/",
          submenu: [
            {
              name: "Archway Gate Metal Detector",
              link: "/category/security/archway-gate-metal-detector/",
            },
            {
              name: "Belt",
              link: "/category/security/belt/",
            },
            {
              name: "Car Search Mirror",
              link: "/category/security/car-search-mirror/",
            },
            {
              name: "CCTV Camera",
              link: "/category/security/cctv-camera/",
            },
            {
              name: "Flash Light",
              link: "/category/security/flash-light/",
            },
            {
              name: "Flute",
              link: "/category/security/flute/",
            },
            {
              name: "Metal Detector",
              link: "/category/security/metal-detector/",
            },
            {
              name: "Security Alarm",
              link: "/category/security/security-alarm/",
            },
            {
              name: "Two Way Radio (Waki Taki)",
              link: "/category/security/two-way-radio-waki-taki/",
            },
            {
              name: "Others",
              link: "/category/security/others-security/",
            },
          ],
        },
        {
          name: "TEXTILE LAB CONSUMABLE",
          link: "/category/textile-lab-consumable/",
          submenu: [
            {
              name: "AATCC",
              link: "/category/textile-lab-consumable/aatcc/",
            },
            {
              name: "Color Guide",
              link: "/category/textile-lab-consumable/color-guide/",
            },
            {
              name: "Color Matching Cabinet",
              link: "/category/textile-lab-consumable/color-matching-cabinet/",
            },
            {
              name: "Detergent",
              link: "/category/textile-lab-consumable/detergent/",
            },
            {
              name: "GSM Cutter",
              link: "/category/textile-lab-consumable/gsm-cutter/",
            },
            {
              name: "James & Heal",
              link: "/category/textile-lab-consumable/james-heal/",
            },
            {
              name: "Machinery",
              link: "/category/textile-lab-consumable/machinery/",
            },
            {
              name: "Meters",
              link: "/category/textile-lab-consumable/meters/",
            },
            {
              name: "Needle Detector",
              link: "/category/textile-lab-consumable/needle-detector/",
            },
            {
              name: "SDC",
              link: "/category/textile-lab-consumable/sdc/",
            },
            {
              name: "Weight Scale & Balance",
              link: "/category/textile-lab-consumable/weight-scale-balance/",
            },
            {
              name: "Others",
              link:
                "/category/textile-lab-consumable/others-textile-lab-consumable/",
            },
          ],
        },
        {
          name: "LABORATORY",
          link: "/category/laboratory/",
          submenu: [
            {
              name: "Biology Lab",
              link: "/category/laboratory/biology-lab/",
            },
            {
              name: "Chemistry Lab",
              link: "/category/laboratory/chemistry-lab/",
            },
            {
              name: "Glassware & Plastic",
              link: "/category/laboratory/glassware-plastic/",
            },
            {
              name: "Machinery",
              link: "/category/laboratory/machinery-laboratory/",
            },
            {
              name: "Permanent Slide",
              link: "/category/laboratory/permanent-slide/",
            },
            {
              name: "Physics Lab",
              link: "/category/laboratory/physics-lab/",
            },
            {
              name: "Testing Kit",
              link: "/category/laboratory/testing-kit/",
            },
            {
              name: "Testing Meter",
              link: "/category/laboratory/testing-meter/",
            },
            {
              name: "Timer",
              link: "/category/laboratory/timer/",
            },
            {
              name: "Others",
              link: "/category/laboratory/others-laboratory/",
            },
          ],
        },
        {
          name: "INDUSTRIAL PLANT",
          link: "/category/industrial-plant/",
          submenu: [
            {
              name: "Air Treatment Plant",
              link: "/category/industrial-plant/air-treatment-plant/",
            },
            {
              name: "Demineralization Plant (DM Plant)",
              link:
                "/category/industrial-plant/demineralization-plant-dm-plant/",
            },
            {
              name: "Effluent Treatment Plant (ETP)",
              link: "/category/industrial-plant/effluent-treatment-plant-etp/",
            },
            {
              name: "Iron Removal Plant",
              link: "/category/industrial-plant/iron-removal-plant/",
            },
            {
              name: "Rain Water Harvesting System",
              link: "/category/industrial-plant/rain-water-harvesting-system/",
            },
            {
              name: "Reverse Osmosis (RO) Plant",
              link: "/category/industrial-plant/reverse-osmosis-ro-plant/",
            },
            {
              name: "Sewage Treatment Plant (STP)",
              link: "/category/industrial-plant/sewage-treatment-plant-stp/",
            },
            {
              name: "Water Treatment Plant (WTP)",
              link: "/category/industrial-plant/water-treatment-plant-wtp/",
            },
          ],
        },
        {
          name: "MEDICAL",
          link: "/category/medical/",
          submenu: [
            {
              name: "Coverall",
              link: "/category/medical/coverall/",
            },
            {
              name: "Face Shield",
              link: "/category/medical/face-shield/",
            },
            {
              name: "Goggles",
              link: "/category/medical/goggles/",
            },
            {
              name: "Gum Boot",
              link: "/category/medical/gum-boot-medical/",
            },
            {
              name: "Hand Gloves",
              link: "/category/medical/hand-gloves-medical/",
            },
            {
              name: "Head Cover",
              link: "/category/medical/head-cover/",
            },
            {
              name: "Mask",
              link: "/category/medical/mask/",
            },
            {
              name: "Pressure Meter",
              link: "/category/medical/pressure-meter/",
            },
            {
              name: "Shoe Cover",
              link: "/category/medical/shoe-cover/",
            },
            {
              name: "Thermometer",
              link: "/category/medical/thermometer/",
            },
            {
              name: "Others",
              link: "/category/medical/others-medical/",
            },
          ],
        },
        {
          name: "COMMERCIAL",
          link: "/category/commercial/",
          submenu: [
            {
              name: "Decoration Item",
              link: "/category/commercial/decoration-item/",
            },
            {
              name: "Land Phone",
              link: "/category/commercial/land-phone/",
            },
            {
              name: "Money Counting Machine",
              link: "/category/commercial/money-counting-machine/",
            },
            {
              name: "Stationery Item",
              link: "/category/commercial/stationery-item/",
            },
            {
              name: "Others",
              link: "/category/commercial/others-commercial/",
            },
          ],
        },
        {
          name: "AQUA CULTURAL",
          link: "/category/aqua-cultural/",
          submenu: [
            {
              name: "Food",
              link: "/category/aqua-cultural/food/",
            },
            {
              name: "Machinery",
              link: "/category/aqua-cultural/machinery-aqua-cultural/",
            },
            {
              name: "Testing Meter & Kit",
              link: "/category/aqua-cultural/testing-meter-kit/",
            },
          ],
        },
        {
          name: "AGRICULTURAL",
          link: "/category/agricultural/",
          submenu: [
            {
              name: "Machinery",
              link: "/category/agricultural/machinery-agricultural/",
            },
            {
              name: "Pesticides & Kit",
              link: "/category/agricultural/pesticides-kit/",
            },
          ],
        },
        {
          name: "OTHERS",
          link: "/category/others/",
        },
      ],

      // Menu for footer
      information: {
        list: [
          ["About Us", "/about-us"],
          ["Contact Us", "/contact-us"],
          ["Terms & Condition", "/terms-condition"],
          ["Why Rely Trade", "/why-rely-trade"],
        ],
      },
      myaccount: {
        list: [
          ["Products", "/products"],
          ["Services", "/services"],
          ["Privacy Policy", "/privacy-policy"],
        ],
      },
    },
  },

  actions: {
    theme: {
      init: ({ libraries }) => {
        libraries.source.handlers.push(ProductPage);
      },
    },
  },
  libraries: {
    html2react: {},
    source: {},
  },
};
