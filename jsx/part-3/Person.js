const Person = (props) => {
  let votingAge = props.age >= 18 ? "Go Vote" : "GoStudy";
  let hobbiesList = props.hobbies.map((hobby) => <li> {hobby}</li>);
  return (
    <div>
      <p>
        <b> Name: </b> {props.name}
      </p>
      <p>
        <b> Age: </b> {props.age} , <b>{votingAge}</b>
      </p>
      <p>
        <b> hobbies: </b> {hobbiesList}
      </p>
    </div>
  );
};
