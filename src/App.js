import  Button  from "./components/Button.js";
import  Counter  from "./components/Counter.js";
import {useState} from "react";

const App = () => {
    const [counter, setCounter] = useState(0);
    const increase = () => setCounter(counter + 1);
    const decrease = () => setCounter(counter - 1);
    const setToZero = () => setCounter(0);
return (
    <div>
        <Counter counter={counter}/>
        <Button onclick={increase} btnText={'Plus one'}/>
        <Button onclick={decrease} btnText={'Minus one'}/>
        <Button onclick={setToZero} btnText={'To Zero'}/>
    </div>
);
}

export default App;


// lesson-1 homework components Header, Content, Total
// import Header from './Header'
// import Content from './Content'
// import Total from './Total'

// const App = () => {

// 	const course = 'Half Stack application development'
// 	const part1 = 'Fundamentals of React'
// 	const exercises1 = 10
// 	const part2 = 'Using props to pass data'
// 	const exercises2 = 7
// 	const part3 = 'State of a component'
// 	const exercises3 = 14
// return (
	
//     <div>
//     <Header name = {course}/>
//     <Content partName = {part1} exCount={exercises1} />
//     <Content partName = {part2} exCount={exercises2} />
//     <Content partName = {part3} exCount={exercises3} />
//     <Total total = {exercises1 + exercises2 + exercises3} />
//     </div>
// );
// }

// export default App;


