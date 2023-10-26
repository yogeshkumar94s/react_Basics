import "./App.css";
import EmployeeCard from "./components/EmployeeCard";
import employeeData from "./employeeData";

function App() {
  return (
    <>
      <h1>Employee Details</h1>
      {employeeData.map((employee) => (
        <EmployeeCard key={employee.id} {...employee} />
      ))}
    </>
  );
}

export default App;
