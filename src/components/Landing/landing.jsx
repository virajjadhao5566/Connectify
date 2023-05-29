import React from "react";
import discordLogo from '../../assets/discord_main_logo.svg'
import left_bg_landing_header from '../../assets/left_bg_landing_header.svg'
import right_bg_landing_header from '../../assets/right_bg_landing_header.svg'
const Landing = () => {
    return (
        <>
            <div>
                <div className="landing relative bg-[#2e3bc8ef] h-screen">
                    <header className="flex flex-row justify-evenly p-5 text-center font relative z-30">
                        <img src={discordLogo} alt="discordLogo" />
                        <nav>
                            <ul className="list-none flex flex-row w-fit space-x-10 text-white font-semibold p-2">
                                <li>Download</li>
                                <li>Nitro</li>
                                <li>Safety</li>
                                <li>Support</li>
                                <li>Blog</li>
                                <li>Carrers</li>
                            </ul>
                            <button>

                            </button>
                        </nav>
                    </header>
                    <main>
                        <h1>Imagine A Place...</h1>
                        <p>
                            ...where you can belong to a school club, a gaming group, or a
                            worldwide art community. Where you and a handful of friends can
                            spend time together. A place that makes it easy to talk every day
                            and hang ut more often.
                        </p>
                        <div>
                            <button>

                            </button>
                            <button>

                            </button>
                        </div>
                    </main>
                    <div>
                        <img src={left_bg_landing_header} alt="" className="w-5/12 h-fit mt-12" />
                        <img src={right_bg_landing_header} alt="" className="w-5/12 h-fit mt-12" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing