import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";

const UserComponent = () => {
    const [userName, setUserName] = useState("User");

    useEffect(() => {
        const userData = localStorage.getItem("userData");
        if (userData) {
            const { name } = JSON.parse(userData);
            if (name) {
                setUserName(name);
            }
        }
    }, []);

    return (
        <div className="w-14 h-14 py-5 rounded-xl flex items-center justify-center cursor-pointer bg-black">
            <FaUser size={30} className="mr-2" />
            <span className="text-white text-sm sm:text-center font-semibold font-Mont">
                {userName}
            </span>
        </div>
    );
}

export default UserComponent;
