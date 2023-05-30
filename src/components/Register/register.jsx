import React from "react";
import bg_img from "../../assets/login_bg.svg"
import discordLogo from '../../assets/discord_main_logo.svg'
import { Link } from "react-router-dom";
const loadDashboard = () =>{
    import('../Landing/landing')
}
const Register = () => {
    return (
        <div
            className="relative z-0 bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${bg_img})` }}
        >

            <Link to="/" onMouseEnter={loadDashboard}>
                <img className="p-5" src={discordLogo} alt="discord" />
            </Link>
            <div className="bg-[#353535] text-white w-2/6 flex flex-col mx-auto">
                <p className="text-center p-2 text-2xl font-extrabold text-white">
                    Create an account
                </p>
                <form className="flex flex-col space-y-5 p-5">
                    <label htmlFor="email">EMAIL</label>
                    <input
                        className="w-[95%] bg-[#2e2d2f] p-2 border border-black"
                        type="text"
                        id="email"
                        name="email"
                    />
                    <label htmlFor="username">USERNAME</label>
                    <input
                        className="w-[95%] bg-[#2e2d2f] p-2 border border-black"
                        type="text"
                        id="username"
                        name="username"
                    />
                    <label htmlFor="password">PASSWORD</label>
                    <input
                        className="w-[95%] bg-[#2e2d2f] p-2 border border-black"
                        type="password"
                        id="password"
                        name="password"
                    />
                    <button className="bg-[#2e3bc8] p-2 text-xl font-semibold text-white">
                        Continue
                    </button>
                    Already have an account
                </form>
            </div>
        </div>
    )
}
export default Register