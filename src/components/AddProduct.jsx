import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/products";

const AddProduct = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        dispatch(addProduct(data));
        reset();

    };

    return (
        <div className="formContainer">
            <h4 className="formTitle">Добавить товар</h4>
            <form
                className="space-y-4 text-[#534F4F]"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="space-y-2">
                    <label >Навание товара</label>
                    <input
                        {...register("name", { required: true })}
                        className="addProductInput"
                        type="text"
                    />
                    {errors.name && <span className="error">Укажите название товара</span>}
                </div>

                <div className="space-y-2">
                    <label>Тип товара</label>
                    <select
                        {...register("category", { required: true })}
                        className="addProductInput"
                    >
                        <option value="">Выберите тип товара</option>
                        <option value="laptop">Ноутбук</option>
                        <option value="smartphone">Смартфон</option>
                        <option value="watch">Часы</option>
                    </select>
                    {errors.category && <span className="error">Укажите тип товара</span>}
                </div>

                <div className="space-y-2">
                    <label>Ссылка на изображение</label>
                    <input
                        {...register("imgUrl", { required: true })}
                        className="addProductInput"
                        type="text"
                    />
                    {errors.imgUrl && <span className="error">Укажите ссылку на изображение</span>}
                </div>

                <div className="grid grid-cols-2 gap-8 pb-4">
                    <div className="space-y-2">
                        <label>Стоимость</label>
                        <input
                            {...register("price", { required: true, min: 0 })}
                            className="addProductInput"
                            type="number"
                        />
                        {errors.price && <span className="error">Укажите стоимость</span>}
                    </div>

                    <div className="space-y-2">
                        <label>В наличии</label>
                        <input
                            {...register("quantity", { required: true, min: 0 })}
                            className="addProductInput"
                            type="number"
                            id="lws-inputQuantity"
                        />
                        {errors.quantity && <span className="error">Укажите количество</span>}
                    </div>
                </div>

                <button type="submit" className="submit bg-emerald-600 hover:bg-emerald-800 text-white">
                    Добавить товар
                </button>
            </form>
        </div>
    );
};

export default AddProduct;