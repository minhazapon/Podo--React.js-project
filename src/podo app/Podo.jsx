import { useEffect } from "react"
import { useState } from "react"

function Podo() {


    ///date work///
    const [date, setDate] = useState("")

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formatDate = now.toLocaleDateString()
            const formatTime = now.toLocaleTimeString()
            setDate(` ${formatDate} - ${formatTime} `)
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    ///date work///


    return (
        <div className=" m-20 ">
            <div>
                <div>
                    <p className=" text-center text-green-500 text-5xl font-bold ">Podo List</p>
                    <p className=" text-center text-green-500 font-thin mt-5 "> {date} </p>
                </div>
                <div className=" mt-6 ">
                    <form>
                        <div className=" flex justify-center items-center ">
                            <input
                                className=" border-[1px] h-[50px] w-[400px] p-3 rounded-l-[20px] font-serif "
                                placeholder="Add Your Task"
                                type="text" />
                            <input
                                className=" bg-green-500 h-[50px] p-3 w-[100px] rounded-r-[20px] font-serif text-white"
                                type="submit"
                                value="add" />
                        </div>
                    </form>
                </div>
                <div>
                    <div>
                        {/* //data here */}
                    </div>
                </div>
                <div className=" flex justify-center mt-8 ">
                    <button className=" btn bg-red-600 text-white ">Clear all</button>
                </div>
            </div>
        </div>
    )
}

export default Podo
