import React from "react";

class A extends React.Component {
  state = {
    value: "아직 안바뀜"
  };

  render() {
    console.log("A render");
    return (
      <div>
        <B {...this.state} />
        <button onClick={this._click}>E 의 값을 바꾸기</button>
      </div>
    );
  }

  _click = () => {
    this.setState({
      value: "E 의 값을 변경"
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

const E = props => (
  <div>
    <p>여긴 E</p>
    <h3>{props.value}</h3>
  </div>
);

export default A;
