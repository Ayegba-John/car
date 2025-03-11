// Parent Component
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}

// Child Component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default App;
