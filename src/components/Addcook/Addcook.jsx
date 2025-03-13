import './Addcook.css'

const Addcook = ({ cookitem, handlePrepare}) => {
    // console.log(cookitem);

    return (

        <li className="font-bold bg-[#28282805]">
            <tr className="text-[#878787] font-normal">
                <td></td>
                <td className="w-52 fira-sans-regular">{cookitem.recipe_name}</td>
                <td className="w-40 fira-sans-regular">{cookitem.preparing_time}</td>
                <td className="w-36 fira-sans-regular">{cookitem.calories}</td>
                <td className=""><button className="btn rounded-full bg-[#0BE58A] w-20 lexend-600" onClick={()=> handlePrepare(cookitem.recipe_id)}>Preparing</button></td>
            </tr>
        </li>

    );
};

export default Addcook;