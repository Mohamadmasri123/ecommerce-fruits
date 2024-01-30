import React from 'react'
import SelectCategory from './SelectCategory'
import fruit from "./../assets/fruit.jpg"
import vgt from "./../assets/vegt.jpg"
import canend from "./../assets/canned.jpg"
import bread from "./../assets/bread.jpg"
import fishe from "./../assets/fishes.jpg"
import egg from "./../assets/eggs.jpg"
import drink from "./../assets/drink.jpg"
import meat from "./../assets/meat.jpg"



const Category = () => {
  return (
    <div className='container py-16 px-12 '>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SelectCategory img={fruit} name="Fruit" count="10"     />
            <SelectCategory img={vgt} name="Fresh Vegs" count="1"     />
            <SelectCategory img={canend} name="Canned" count="8"     />
            <SelectCategory img={bread} name="Bread" count="9"     />
            <SelectCategory img={fishe} name="Fishe" count="4"     />
            <SelectCategory img={egg} name="Egg" count="7"     />
            <SelectCategory img={drink} name="Drink" count="32"     />
            <SelectCategory img={meat} name="Meat" count="12"     />

        </div>


    </div>
  )
}

export default Category