//npm install use-axios-client --force
import React, { useEffect, useState } from "react";
import { useAxios } from "use-axios-client";
//npm install axios
import axios from "axios";

//Axios Demo
export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div
        style={{
          marginLeft: 200,
          marginTop: 100,
        }}>
        <h1>AXIOS DEMO</h1>
        <ul
          style={{
            color: "blue",
            padding: 2,
          }}>
          {this.state.persons.map((person) => (
            <li key={person.id}>
              {person.name}
              <br></br>
              {person.email}
              <hr></hr>
            </li>
          ))}
        </ul>
        <br></br>
        <PersonAdd />
        <hr />
        <AwaitAsync />
        <hr />
        <AxiosuseAxios />
      </div>
    );
  }
}

class PersonAdd extends React.Component {
  state = {
    name: "",
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Person Name: </label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            style={{
              borderRadius: 10,
              width: 300,
              borderBlockColor: "black",
              borderBlockStyle: "solid",
            }}
          />
          <br />
          <br />
          <button type="submit" style={{ borderRadius: 10 }}>
            Add
          </button>
        </form>
      </div>
    );
  }
}

//AXIOS AWAIT ASYNC
const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

function AwaitAsync() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function getPost() {
      const response = await client.get("/2");
      setPost(response.data);
      console.log(response.data);
    }
    getPost();
  }, []);

  async function deletePost() {
    const response = await client.delete("/1");
    alert("Post deleted!");
    console.log(response);
  }

  if (!post) return "No post!";

  return (
    <div style={{ color: "blue", marginTop: 30, padding: 2 }}>
      <h1>AXIOS AWAIT ASYNC DEMO</h1>
      <h1 key={post.title}>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}

//useAxios
function AxiosuseAxios() {
  const { data, error, loading } = useAxios({
    url: "https://fakestoreapi.com/products",
  });

  if (loading || !data) return "Loading...";
  if (error) return "Error!";

  return (
    <div className="row" style={{ marginTop: 30 }}>
      <h1>useAxios DEMO</h1>
      <h1 className="head"> PRODUCT DETAILS </h1>
      <div className="col md-3">
        <h1 className="head">Employees list</h1>
        <div className="row">
          {data.map((record) => (
            <div
              className="col col-md-3 p-3"
              style={{ borderStyle: "groove" }}
              key={record.id}>
              <div>
                <img
                  src={record.image}
                  alt={"No img"}
                  style={{ height: 100, width: 100 }}
                />
                <br></br>
                <br></br>
                <p>{record.title}</p>
                <p>RS: {record.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
