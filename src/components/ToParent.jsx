import React from "react";

class A extends React.Component {
  state = {
    value: "아직 안바뀜"
  };

  render() {
    console.log("A render");
    return (
      <div>
        <h3>{this.state.value}</h3>
        <B change={this.change} />
      </div>
    );
  }

  change = () => {
    this.setState({
      value: "A 의 값을 변경"
    });
  };
}

const B = props => (
  <div>
    <p>여긴 B</p>
    <C {...props} />
  </div>
);

const C = props => (
  <div>
    <p>여긴 C</p>
    <D {...props} />
  </div>
);

const D = props => (
  <div>
    <p>여긴 D</p>
    <E {...props} />
  </div>
);

const E = props => {
  function click() {
    props.change();
  }
  return (
    <div>
      <p>여긴 E</p>
      <button onClick={click}>클릭</button>
    </div>
  );
};

export default A;
