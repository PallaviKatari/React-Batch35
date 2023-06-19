//Child Component 
//spunky-sam
//https://www.kasandbox.org/programming-images/avatars/spunky-sam.png
export function getImageUrl1(image) {
  return (
    "https://www.kasandbox.org/programming-images/avatars/" +
    image.imageId +
    ".png"
  );
}

//Child Component - Destructuring of Props
//First Call - image(name,imageId)->spunky-sam,size=100
function Avatar({ image, size }) {
  return (
    <span style={{marginLeft:20}}>
    <img
      className="avatar"
      //image property are passed from Profile -> Avatar -> getImageUrl1
      src={getImageUrl1(image)} //spunky-sam -> end-result ->https://www.kasandbox.org/programming-images/avatars/spunky-sam.png
      alt={image.name} //spunky-sam
      width={size} //100
      height={size} //100
      style={{marginRight:20}}
    />
    {/* spunky-sam */}
    {image.name} 
    </span>
  );
}

//Passing props from Parent Component -> Avatar Child Component
export default function CardProfile() {
  return (
    <div>
      <Avatar
        size={100}
        image={{
          name: "spunky-sam",
          imageId: "spunky-sam",
        }}
      />
      <Avatar
        size={90}
        image={{
          name: "marcimus",
          imageId: "marcimus",
        }}
      />
      <Avatar
        size={80}
        image={{
          name: "marcimus-red",
          imageId: "marcimus-red",
        }}
      />
      <Avatar
        size={70}
        image={{
          name: "marcimus-purple",
          imageId: "marcimus-purple",
        }}
      />
      <Avatar
        size={60}
        image={{
          name: "marcimus-orange",
          imageId: "marcimus-orange",
        }}
      />
      <Avatar
        size={50}
        image={{
          name: "spunky-sam",
          imageId: "spunky-sam",
        }}
      />
    </div>
  );
}
