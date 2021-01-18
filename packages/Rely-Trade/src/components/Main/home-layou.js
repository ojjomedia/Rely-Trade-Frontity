import React from "react";
import { connect } from "frontity";
import ProductLayout from "./product-layout";

const HomeLayou = ({ state }) => {
  return (
    <div>
      <ProductLayout
        CategoriesTitle="HEALTH &amp; SAFETY"
        Id="226"
        SubCategory={[
          ["Safety Shoe", "/category/health-safety/safety-shoe/"],
          ["Gum Boot", "/category/health-safety/gum-boot/"],
          ["Eyewash Station", "/category/health-safety/eyewash-station/"],
          ["Safety Goggles", "/category/health-safety/safety-goggles/"],
        ]}
      />

      <ProductLayout
        CategoriesTitle="Industrial Plant"
        Id="227"
        SubCategory={[
          [
            "DM Plant",
            "/category/industrial-plant/demineralization-plant-dm-plant/",
          ],
          [
            "Iron Removal Plant",
            "/category/industrial-plant/iron-removal-plant/",
          ],
          [
            "Water Softening Plant",
            "/category/industrial-plant/water-treatment-plant-wtp/",
          ],
        ]}
      />

      <ProductLayout
        CategoriesTitle="TEXTILE LAB CONSUMABLE"
        Id="228"
        SubCategory={[
          [
            "Color Matching Cabinet",
            "/category/textile-lab-consumable/color-matching-cabinet/",
          ],
          [
            "Weight Scale & Balance",
            "/category/textile-lab-consumable/weight-scale-balance/",
          ],
        ]}
      />
    </div>
  );
};

export default connect(HomeLayou);
