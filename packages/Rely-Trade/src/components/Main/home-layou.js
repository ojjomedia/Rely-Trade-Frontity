import React from 'react';
import { connect } from 'frontity';
import ProductLayout from './product-layout';
import ProductCarousel from '../Products/carousel';

const HomeLayou = ({ state }) => {
    return (
        <div>
            <ProductLayout 
            CategoriesTitle="Safety Equipment's" 
            C_Link="/category/safety-equipments"
            Time="5000"
            SubCategory={ 
                [['Safety', '/category/safety-equipments/safety-vest/'],
                ['Masks', '/category/safety-equipments/masks/'],
                ['Ear Protector', '/category/safety-equipments/ear-protector/'],
                ['Safety Goggles', '/category/safety-equipments/safety-goggles/']] 
            } />

            <ProductLayout 
            CategoriesTitle="Industrial Plant" 
            C_Link="/category/industrial-plant"
            Time="6000"
            SubCategory={ 
                [['DM Plant', '/category/industrial-plant/dm-plant/'],
                ['Iron Removal Plant', '/category/industrial-plant/iron-removal-plant/'],
                ['Water Softening Plant', '/category/industrial-plant/water-softening-plant/']] 
            } />

            <ProductLayout 
            CategoriesTitle="Lab Equipment" 
            C_Link="/category/lab-equipment"
            Time="4000"
            SubCategory={ 
                [['Textile Lab Consumable', '/category/lab-equipment/textile-lab-consumable/'],
                ['Textile Lab Machinery', '/category/lab-equipment/textile-lab-machinery/']] 
            } />
            
        </div>
    )
}

export default connect(HomeLayou);
