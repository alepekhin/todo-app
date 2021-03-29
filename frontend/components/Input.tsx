import React, { useState } from "react";

interface TodoInputType {
    value: string
    id: string
}

export const TodoInput = ({value, id}:TodoInputType) => {

    const [val, setVal] = useState(value)

    const onChangeHanler = (e) => {
        setVal(e.target.value)
    }

    const onClickHanler = (e) => {
    }

    return (
            <div>
                <div>
                    <input />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </div>

    );
};
