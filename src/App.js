import { Outlet } from "react-router-dom";
export function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}
export function Product() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
export default App;
