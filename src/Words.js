import wordBank from "./wordle-bank.txt"

export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
]

export const generateWordSet = async () => {
    let wordSet;
    let todaysWord;
    await fetch(wordBank).then(res => res.text()).then(result => {
        const wordArr = result.split("\n").map(r => r.trim())
        todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)]
        wordSet = new Set(wordArr)
    })
    return { wordSet, todaysWord }
}