import './CustomButton.css';
import './App.css';
import CustomButton from './CustomButton';
function App() {
  return (
    <>
      <div>
        <CustomButton text="I" color="blue" />
        <CustomButton text="know" color="pink" />
        <CustomButton text="React!" color="white" />
      </div>
    </>
  );
}

export default App;
