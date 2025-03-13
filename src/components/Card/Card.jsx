import { IoMdTime } from "react-icons/io";
import { FaFireFlameCurved } from "react-icons/fa6";
import './Card.css'
const Card = ({ card, handleData }) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = card
    return (
        <div>
            <div>
                <div className="card w-[450px] bg-base-100 shadow-xl">
                    <figure><img className="object-cover h-56 w-full" src={recipe_image} alt="Shoes" /></figure>
                    <h2 className="text-start text-xl font-bold mb-2 lexend-600">{recipe_name}</h2>
                    <p className="text-start mb-2 fira-sans-regular text-[#878787]">{short_description}</p>
                    <hr />
                    <p className="text-start font-bold text-lg lexend-500">Ingredients: {ingredients.length}</p>
                    <ul className="list-disc text-start mb-4 text-[#878787] fira-sans-regular">
                        <li className="ml-8">{ingredients[0]}</li>
                        <li className="ml-8">{ingredients[1]}</li>
                        <li className="ml-8">{ingredients[2]}</li>

                    </ul>
                    <hr />
                    <div className="flex justify-between w-64 mb-8 fira-sans-regular text-[#282828CC]">
                        <div className="text-start flex">
                            <p className="mt-1 mr-1"><IoMdTime /></p> <p>{preparing_time}</p>
                        </div>
                        <div className="text-start flex text-[#282828CC] fira-sans-regular">
                            <p className="mt-1 mr-1"><FaFireFlameCurved /></p> 
                            <p>{calories}</p>
                        </div>
                    </div>
                    <button onClick={()=> handleData(card)} className="btn rounded-full bg-[#0BE58A] w-44">Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

export default Card;