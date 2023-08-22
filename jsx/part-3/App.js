const App = () => (
  <div>
    <Person name="Barnie" age="12" hobbies={["reading", "golf"]} />
    <Person name="Caesar" age="20" hobbies={["waterpolo", "swimming"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
