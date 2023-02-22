import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductButtons } from './ProductButton';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductCardHOCProps } from '../interface/interfaces';


export { ProductButtons } from './ProductButton';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';


export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title  : ProductTitle,
    Image  : ProductImage,
    Buttons: ProductButtons,
})


export default ProductCard;