import './Prepare.css'
const Prepare = ({ cookitem }) => {
   console.log(cookitem); 

    return (

        <li className="font-bold bg-[#28282805]">
            <tr className="text-[#878787] font-normal">
                <td></td>
                <td className="w-36 fira-sans-regular">{cookitem[0].recipe_name}</td>
                <td className="w-36 fira-sans-regular">{cookitem[0].preparing_time}</td>
                <td className="w-36 fira-sans-regular">{cookitem[0].calories}</td>
                <td></td>
            </tr>
        </li>

    );
};

export default Prepare;