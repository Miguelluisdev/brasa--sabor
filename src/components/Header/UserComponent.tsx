import { FaUser } from "react-icons/fa";

const UserComponent = () => {
    return (
        <div className="w-14 h-14 py-5 rounded-xl flex items-center justify-center cursor-pointer bg-black">
            <FaUser size={30} className="mr-2" />
            <span className="text-white text-sm sm:text-center font-semibold font-Mont">User</span>
        </div>
    );
}

export default UserComponent;