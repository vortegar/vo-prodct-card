import { Props as ProductCardProps    } from "../components/ProductCard";
import { Props as ProductTitleProps   } from "../components/ProductTitle";
import { Props as ProductImageProps   } from '../components/ProductImage';
import { Props as ProductButtonsProps } from '../components/ProductButton';
import { products } from '../data/product';



export interface Product {
    id : string;
    img ?: string;
    title: string;
}

export interface ProductContextProps {
    counter  : number;
    product  : Product;
    maxCount ?: number;
    
    incresBy : ( value:number) => void;
}


export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ) : JSX.Element,
    Buttons: (Props: ProductButtonsProps ) => JSX.Element,
    Image  : (Props: ProductImageProps   ) => JSX.Element,
    Title  : (Props: ProductTitleProps   ) => JSX.Element,
}

export interface onChangeArgs {
    product : Product;
    count   : number;
}

export interface ProductInCart extends Product {
    count : number
}

export interface InitialValues {
    count   ?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count            : number;
    isMaxCountReached: boolean;
    maxCount        ?: number;
    product          : Product;

    incresBy       : ( value:number) => void;
    reset            : () => void;
}