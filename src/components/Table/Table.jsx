import Addcook from "../Addcook/Addcook";
import Prepare from "../Prepare/Prepare";
import './Table.css'

const Table = ({ tabledata, handlePrepare, preparingData }) => {

    // console.log(preparingData);
    return (
        <div>
            <div className="card w-[600px] bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className="text-2xl font-bold lexend-600">Want to cook:{tabledata.length}</h1>
                    <hr />
                    <table className="table-fixed w-">
                        <ol className="list-decimal">

                            <tr className="text-[#878787] font-bold">
                                <td></td>
                                <td className="w-36 fira-sans-regular">Name</td>
                                <td className="w-36 fira-sans-regular">Time</td>
                                <td className="w-36 text-start fira-sans-regular">Calories</td>
                                <td></td>
                            </tr>





                            {

                                tabledata.map(cookitem => <Addcook key={cookitem.recipe_id} cookitem={cookitem}
                                    tabledata={tabledata} handlePrepare={handlePrepare}></Addcook>)
                            }


                        </ol>



                    </table>

                    <h1 className="text-2xl font-bold lexend-600">Currently cooking:{preparingData.length}</h1>
                    <hr />
                    <table className="table-fixed w-280">
                        <ol className="list-decimal">

                            <tr className="text-[#878787] font-bold">
                                <td></td>
                                <td className="w-36 fira-sans-regular">Name</td>
                                <td className="w-36 fira-sans-regular">Time</td>
                                <td className="w-36 fira-sans-regular">Calories</td>
                                <td></td>
                            </tr>





                            {

                                preparingData.map(cookitem => <Prepare key={cookitem.recipe_id} cookitem={cookitem}></Prepare>)
                            }


                        </ol>



                    </table>

                    <table>
                        <tr className="text-[#878787] font-semibold">
                            <td></td>
                            <td className="w-20 "></td>
                            <td className="w-40 text-[#282828CC] lexend-600">Total Time = 45 minutes</td>
                            <td className="w-40 text-[#282828CC] text-end lexend-600">Total Calories = 1050 calories</td>
                            <td></td>
                        </tr>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default Table;