const App = () => (
  <div>
    <Tweets
      name="Barnie"
      username="bbarnie"
      The
      date
      of
      the
      tweet={new Date().toDateString()}
      message="barnie the cat"
    />
    <Tweets
      name="Caesar"
      username="ccaesar"
      The
      date
      of
      the
      tweet={new Date().toDateString()}
      message="caesar the dog"
    />
    <Tweets
      name="Bubble"
      username="bubbble"
      The
      date
      of
      the
      tweet={new Date().toDateString()}
      message="bubble the rabbit"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
