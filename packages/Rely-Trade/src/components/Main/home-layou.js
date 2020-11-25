import React from 'react';
import { connect } from 'frontity';
import ProductLayout from './product-layout';

const HomeLayou = ({ state }) => {
    return (
        <div>
            <ProductLayout 
            CategoriesTitle="Safety Equipment's" 
            Id="90"
            SubCategory={ 
                [['Safety', '/category/safety-equipments/safety/'],
                ['Masks', '/category/safety-equipments/masks/'],
                ['Ear Protector', '/category/safety-equipments/ear-protector/'],
                ['Safety Goggles', '/category/safety-equipments/safety-goggles/']] 
            } />

            <ProductLayout 
            CategoriesTitle="Industrial Plant" 
            Id="92"
            SubCategory={ 
                [['DM Plant', '/category/industrial-plant/dm-plant/'],
                ['Iron Removal Plant', '/category/industrial-plant/iron-removal-plant/'],
                ['Water Softening Plant', '/category/industrial-plant/water-softening-plant/']] 
            } />

            <ProductLayout 
            CategoriesTitle="Lab Equipment" 
            Id="91"
            SubCategory={ 
                [['Textile Lab Consumable', '/category/lab-equipment/textile-lab-consumable/'],
                ['Textile Lab Machinery', '/category/lab-equipment/textile-lab-machinery/']] 
            } />
            
        </div>
    )
}

export default connect(HomeLayou);
