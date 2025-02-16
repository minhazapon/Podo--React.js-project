import { useEffect } from "react"
import { useState } from "react"
import { FaDeleteLeft } from "react-icons/fa6";

function Podo() {

    const [inputValue, setInputValue] = useState("")
    const [task, setTask] = useState([])

    const handleInput = (value) => {
        setInputValue(value)
    }

    const handleForm = (e) => {

        e.preventDefault()
        if (!inputValue) return
        if (task.includes(inputValue)) {
            setInputValue("")
            return;
        }
        setTask((preTask) => [...preTask, inputValue])
        setInputValue("")

    }

    const handleButton = () => {
        setTask([])
    }

    const handleDelete = (addValue) => {

        const deleteItems = task.filter((deleteTask) => deleteTask !== addValue)
        setTask(deleteItems)

    }


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
                    <form onSubmit={handleForm}>
                        <div className=" flex justify-center items-center ">
                            <input
                                required
                                value={inputValue}
                                onChange={(e) => handleInput(e.target.value)}
                                className=" border-[1px] h-[50px] w-[400px] p-3 rounded-l-[20px] font-serif "
                                placeholder="Add Your Task"
                                type="text" />
                            <input
                                className=" cursor-pointer bg-green-500 h-[50px] p-3 w-[100px] rounded-r-[20px] font-serif text-white"
                                type="submit"
                                value="add" />
                        </div>
                    </form>
                </div>
                <div>
                    <div>
                        {
                            task.map((task, index) => <div className=" flex justify-center mt-5 " key={index}>
                                <p className=" bg-white border-[1px] h-[50px] p-3 w-[500px] rounded-[20px]  ">
                                    <p className=" flex justify-between items-center gap-5  ">
                                        <p>{task}</p>
                                        <div>
                                            <button onClick={() => handleDelete(task)}> <FaDeleteLeft className=" cursor-pointer h-[25px] w-[25px] "></FaDeleteLeft> </button>
                                        </div>
                                    </p>
                                </p>
                            </div>)
                        }
                    </div>
                </div >
                <div className=" flex justify-center mt-5 cursor-pointer ">
                    <button onClick={handleButton} className=" btn bg-red-600 text-white w-[500px] rounded-[20px] ">Clear all</button>
                </div>
            </div >
        </div >
    )
}

export default Podo
