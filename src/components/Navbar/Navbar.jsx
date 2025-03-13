import { FaRegUser, } from "react-icons/fa"
import { IoSearchOutline } from "react-icons/io5";
import './Navbar.css'
const Navbar = () => {

    return (
        <div>
            <div className="navbar bg-base-100 flex justify-between">
                <div className="flex">
                    <a className="text-3xl lexend-400 font-bold" >Recipe Calories</a>
                </div>
                <div className="lexend-400 flex- justify-between items-center w-[375px]">
                    <button>Home</button>
                    <button>Recipes</button>
                    <button>About</button>
                    <button>Search</button>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <div className="">
                            <span className="searchicon"><IoSearchOutline></IoSearchOutline></span>
                            <input type="text" placeholder="      Search" className="input input-bordered w-24 md:w-auto rounded-full inputt " />
                        </div>

                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full border bg-[#0BE58A]">
                                <FaRegUser className="mt-3 ml-3" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;