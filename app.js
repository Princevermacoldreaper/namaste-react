const heading = React.createElement(
  "div",
  { id: "Parent" },
  React.createElement("div", { id: "Child" }, [
    React.createElement("h1", {}, "hello from react!"),
    React.createElement("h2", {}, "hello h2 from react!"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
