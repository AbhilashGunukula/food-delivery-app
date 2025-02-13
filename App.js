const heading = React.createElement(
  "div",
  {
    id: "Parent",
  },
  React.createElement(
    "div",
    {
      id: "child",
    },
    [
      React.createElement("h1", {}, "I'm H1 tag"),
      React.createElement("h1", {}, "Hello World from react"),
    ]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
