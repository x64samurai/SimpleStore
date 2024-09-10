/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart";
import { removeQuantity } from "../redux/products";

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const { id, imgUrl, name, category, price, quantity } = product;

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        dispatch(removeQuantity(id));
    };

    return (
        <div className="card md:w-96 bg-base-100 shadow-xl">
            <figure className="relative">
                <img src={`${imgUrl}`} alt="Gadget" className="h-80 w-full" />
                <div className="badge badge-secondary absolute top-3 right-3 bg-blue-500">
                    {category}
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fuga
                </p>
                <div className="flex justify-between">
                    <p className="w-80">В наличии: {quantity}</p>
                    <p className="text-left w-36">{price} руб</p>
                </div>
                <div className="card-actions mt-2">
                    <button
                        className="btn btn-sm btn-primary bg-emerald-600 hover:bg-emerald-800"
                        disabled={quantity === 0}
                        onClick={handleAddToCart}
                    >
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;