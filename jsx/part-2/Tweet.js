const Tweets = (props) => (
  <div className="tweet">
    <p> Username: {props.username} </p>
    <p> Name: {props.name} </p>
    <p> The date of the tweet: {props.date} </p>
    <p> Message: {props.message} </p>
  </div>
);
