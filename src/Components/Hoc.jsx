import React from "react";

//HOC Component
const Hoc = (WrappedComponent, entity) => {
  return class extends React.Component {
    state = {
      data: [], //TodoList
      term: "", //todos
    };
    componentDidMount() {
      const fetchData = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}` //todos
        );
        const json = await res.json();
        this.setState({ ...this.state, data: json });
      };
      fetchData();
    }
    render() {
      let { term, data } = this.state;
      let filteredData = data.slice(0, 5).filter((d) => {
        if (entity === "users") {
          const { name } = d;
          return name.indexOf(term) >= 0;
        }
        if (entity === "todos") {
          const { title } = d;
          return title.indexOf(term) >= 0;
        }
        if (entity === "photos") {
          const { title } = d;
          return title.indexOf(term) >= 0;
        }
      });
      return (
        <div style={{ marginLeft: 200 }}>
          <h1>React Higher-Order Components</h1>
          <p>
            Higher-order components or HOC is the advanced method of reusing the
            component functionality logic. It simply takes the original
            component and returns the enhanced component.
          </p>
          <h2>{entity} List</h2>
          <div>
            <input
              type="text"
              value={term}
              className="btn btn-warning text text-light"
              onChange={(e) =>
                this.setState({ ...this.state, term: e.target.value })
              }
              style={{ width: 250 }}
              placeholder={`Search ${entity} list`}
            />
          </div>
          <WrappedComponent data={filteredData}></WrappedComponent>
        </div>
      );
    }
  };
};

export default Hoc;
