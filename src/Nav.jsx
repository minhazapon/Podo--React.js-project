import { NavLink } from "react-router-dom"

function Nav() {

    const navS = <>
        <li><NavLink to='/'>Home</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 p-5 shadow">
                <div className="flex-1">
                    <div className=" flex items-center gap-2 ">
                        <img className=" h-[50px] " src="https://cdn-icons-png.flaticon.com/128/4679/4679562.png" alt="" />
                        <a className="text-xl font-serif text-black">Podo</a>
                    </div>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {navS}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav
