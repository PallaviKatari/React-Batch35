// Props simply stands for properties.
// They are what make components reusable.
// Because they perform an essential function
// – they pass data from one component to another.
// Props act as a channel for component communication.
// Props are passed from parent to child and help your child
// access properties that made it into the parent's tree.
import { useTime } from "./Theme";
//Example 1
//Functional Component - User - Child Component
function User(props) { //name="John"
  //name - property
  return <span>Hello {props.name}!</span>; //Hello John!
}

//Functional Component - CurrentUser - Parent Component
export function CurrentUser() {
  //User-defined hook created in this application
  const time = useTime();
  return (
    // React Fragments
    <>
      <User name="John" />
      <Message msg=" Welcome Back!!!" date={time.toLocaleTimeString()} />
      <Message1 msg=" on " date={time.toLocaleDateString()} />
    </>
  );
}

//Example 2
//Message - Child Component for CurrentUser
function Message(props) {
  return (
    // Welcome back!!! CuurentTime
    <>
      <span>
        {props.msg} @ {props.date}
      </span>
    </>
  );
}
//Destructuring is a JavaScript feature that allows you to extract sections of data from an array or object.
//In React, destructuring allows us to pull apart or unpack our props, which lets us access our props and use them in a more readable format.
//Destructuring for the previous code

//Message1 - Child Component for CurrentUser
function Message1({ msg, date }) {
  return (
    <>
      <span>
        {msg} {date}
      </span>
    </>
  );
}

//Example 3 - Destructuring
export function getImageUrl(person, size = "s") {
  return (
    "https://tse4.mm.bing.net/th/id/OIP.MyarLe75JVCrA9qd59m5UAAAAA?pid=ImgDet&rs=1/" +
    person.imageId +
    size +
    ".jpg"
  );
}

export function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

//Destructuring Prop - children(default keyword)
function Card({ children }) {
  return <div className="card">{children}</div>;
}

//Parent Component - Avatar
//Card Component is nested in the Profil- Avatar is nested in the Card Component
export default function Profile() {
  return (
    <Card>
      <Avatar
        size={40}
        person={{
          name: "John",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}
