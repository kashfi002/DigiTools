import React, { use } from 'react';
import ProductCard from './ProductCard';

const Products = ({modelPromise}) => {
    const products=use(modelPromise)
    return (
        <div>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3 gap-2'>
            {
                products.map(product=>(
                   <ProductCard product={product}></ProductCard>  
                ))
            }
            </div>
          
        </div>
    );
};

export default Products;