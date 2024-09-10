import { useSelector } from "react-redux";

const Billing = () => {
    const carts = useSelector((state) => state.carts);
    const subTotal = carts.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const totalBillings = (subTotal) => {
        if (subTotal > 0) {
            return subTotal + 499
        }

    };

    return (
        <div className="mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0">
            <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Стоимость</p>
                <p className="text-gray-700">{subTotal} руб</p>
            </div>
            <div className="flex justify-between">
                <p className="text-gray-700">Доставка</p>
                <p className="text-gray-700">{subTotal > 0 ? "499 руб" : 0}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
                <p className="text-lg font-bold">Итого</p>
                <div className="">
                    <p className="mb-1 text-lg font-bold">{subTotal > 0 ? totalBillings(subTotal) : 0} руб</p>
                </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Заказать
            </button>
        </div>
    );
};

export default Billing;