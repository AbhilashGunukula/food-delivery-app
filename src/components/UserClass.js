import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "MyName",
        location: "India",
        avatar_url: "Dummy Pic",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/AbhilashGunukula");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>This is the food delivery front end design app</h4>
      </div>
    );
  }
}

export default UserClass;
