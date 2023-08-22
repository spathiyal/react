const App = () => (
  <div>
    <FirstComponent />
    <NamedComponent name="Bubble" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
