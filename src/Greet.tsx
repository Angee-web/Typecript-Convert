
// Step 1: Define an interface for props.
interface GreetProps {
  name: string;
}

// Step 2: Apply the props type to the functional component.
const Greet = ({ name }: GreetProps) => {
  return <div>Hello, {name}</div>;
};

export default Greet;
