import React from "react";

import discordLogo from "../../assets/discord_main_logo.svg";
import left_bg_landing_header from "../../assets/left_bg_landing_header.svg";
import right_bg_landing_header from "../../assets/right_bg_landing_header.svg";
import cloudeImg from "../../assets/center_bg_landing_header.svg";

import { Link } from "react-router-dom";
const Section2 = React.lazy(() => import("./components/section2"));
const Section3 = React.lazy(() => import("./components/section3"));
const Section4 = React.lazy(() => import("./components/section4"));
const Section5 = React.lazy(() => import("./components/section5"));
const Footer = React.lazy(() => import("./components/footer"));

function loadDashboard() {
    import("../Dashboard/dashboard");
}
function loadLogin() {
    import("../Login/login");
}

const Landing = () => {
    return (
        <>
            <div
                className="relative z-0 bg-cover bg-center h-screen"
                style={{
                    backgroundImage: `url(${cloudeImg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPositionY: "top",
                }}
            >
                <div className="landing relative bg-[#2e3bc8ef] h-screen">
                    <header className="flex flex-row justify-evenly p-5 text-center font relative z-30">
                        <Link to="/dashboard" onMouseEnter={loadDashboard}>
                            <img src={discordLogo} alt="discord" />
                        </Link>
                        <nav>
                            <ul className="list-none flex flex-row w-fit space-x-10 text-white font-semibold p-2">
                                <li>Download</li>
                                <li>Nitro</li>
                                <li>Safety</li>
                                <li>Support</li>
                                <li>Blog</li>
                                <li>Carrers</li>
                            </ul>
                        </nav>
                        <button
                            onMouseEnter={loadLogin}
                            className="bg-white text-[#5865f2] font-medium p-2 rounded-3xl px-6 "
                        >
                            <Link to="/login">Login</Link>
                        </button>
                    </header>
                    <main className="relative z-20 text-white text-center w-[45%] mx-auto p-5 my-12 space-y-8">
                        <h1 className="text-7xl font-bold my-12">Imagine A Place...</h1>
                        <p>
                            ...where you can belong to a school club, a gaming group, or a
                            worldwide art community. Where you and a handful of friends can
                            spend time together. A place that makes it easy to talk every day
                            and hang ut more often.
                        </p>
                        <div className="btn-grp flex flex-row text-center justify-evenly space-x-5">
                            <button className="w-[55%] bg-white text-black text- center rounded-3xl p-2">
                                Download for Mac
                            </button>
                            <button className="w-[55%] bg-black text-white text-center rounded-3xl p-2">
                                Open Discord in your browser
                            </button>
                        </div>
                    </main>
                    <div className="absolute bottom-0 background flex flex-row justify-between align-bottom w-[95%] left-10 z-10">
                        <img
                            src={left_bg_landing_header}
                            alt="left_bg_landing_header"
                            className="w-5/12 h-fit mt-12"
                        />
                        <img
                            src={right_bg_landing_header}
                            alt="right_bg_landing_header"
                            className="w-5/12 h-fit"
                        />
                    </div>
                </div>
            </div>
            <React.Suspense fallback={<p>Loading....</p>}>
                <Section2 />
            </React.Suspense>
            <React.Suspense fallback={<p>Loading....</p>}>
                <Section3 />
            </React.Suspense>
            <React.Suspense fallback={<p>Loading....</p>}>
                <Section4 />
            </React.Suspense>
            <React.Suspense fallback={<p>Loading....</p>}>
                <Section5 />
            </React.Suspense>
            <React.Suspense fallback={<p>Loading....</p>}>
                <Footer />
            </React.Suspense>
        </>
    );
};

export default Landing;
