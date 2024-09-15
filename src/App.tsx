import Counter from "./Counter";
import Greet from "./Greet";

const App = () => {
  return (
    <div>
      {/* Apply the props define in greet to the component */}
      <Greet name="Dera" />
      <Counter />
    </div>
  );
};

export default App;
