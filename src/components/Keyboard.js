import React, { useCallback, useEffect, useContext } from 'react'
import Key from "./Key"
import { AppContext } from '../App';

function Keyboard() {
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    const { onSelectLetter, onDelete, onEnter } = useContext(AppContext)

    const handleKeyboard = useCallback((e) => {
        if (e.key === "Enter") {
            onEnter()
        } else if (e.key === "Backspace") {
            onDelete()
        } else {
            keys1.forEach(key => {
                if (e.key.toUpperCase() === key.toUpperCase()) onSelectLetter(key)
            })
            keys2.forEach(key => {
                if (e.key.toUpperCase() === key.toUpperCase()) onSelectLetter(key)
            })
            keys3.forEach(key => {
                if (e.key.toUpperCase() === key.toUpperCase()) onSelectLetter(key)
            })
        }
    })

    // How to detect keyboard event in React
    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard)
        return () => {
            document.removeEventListener("keydown", handleKeyboard)
        }
    }, [handleKeyboard])

    return (
        <div className='keyboard' onKeyDown={handleKeyboard}>
            <div className='line1'>{
                keys1.map(key => <Key key={key} keyVal={key} />)
            }</div>
            <div className='line2'>
                {
                    keys2.map(key => <Key key={key} keyVal={key} />)
                }
            </div>
            <div className='line3'>
                <Key keyVal="Enter" bigKey />
                {
                    keys3.map(key => <Key key={key} keyVal={key} />)
                }
                <Key keyVal="Delete" bigKey />
            </div>

        </div>
    )
}

export default Keyboard