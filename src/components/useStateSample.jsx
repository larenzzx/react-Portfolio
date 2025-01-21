import { useState } from "react"


export default function Sample() {
    const [count, setCount] = useState(1)

    // function handleCount() {
    //   setCount(count + 1)
    // }

    function handleCount(type) {

        // return setCount(type === "add" ? count + 1 :  count - 1)

        // if (type === "add") {
        //   return setCount(count + 1)
        // }
        // return setCount(count - 1)

        if (type === 'add') {
            return setCount(count + 1)
        } else if (type === 'multi') {
            return setCount(count * 2)
        } else if (type === 'reset') {
            return setCount(1)
        }
        return setCount(count - 1)


    }


    return (
        <>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tranform size-52 text-center space-y-4">
                <h1 className="bg-secondary text-white text-2xl font-semibold">{count}</h1>
                <div className="flex gap-x-4">
                    {/* <button className="btn btn-primary" onClick={handleCount}>Add</button> */}
                    <button className="btn btn-primary" onClick={() => handleCount('add')}>Add</button>
                    <button className="btn btn-primary" onClick={() => handleCount('minus')}>Minus</button>
                    <button className="btn btn-primary" onClick={() => handleCount('multi')}>Multiply by 2</button>

                    <button className="btn btn-primary" onClick={() => handleCount('reset')}>Reset</button>
                    {/* <button className="btn btn-primary" >Minus</button> */}
                </div>
            </div>

        </>
    );
}