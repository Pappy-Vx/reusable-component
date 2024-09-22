import CounterComponent from "./CounterComponent"

const CounterExample = () => {
  return (
    <div>
        <h1>Counter Example</h1>
        <div className="counter"> <CounterComponent value={100} /> + components</div>
    </div>
  )
}

export default CounterExample