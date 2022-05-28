import "./styles.css";
import { BrowserRouter, Link } from "react-router-dom";
import Expenses from "./routes/expenses";

export default function App() {
  return (
    <div className="App">
      <h1>React Bookeeping App</h1>
      <nav
        style={{
          borderBottom: "solid 3px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/routes/expenses.tsx">Expenses</Link> |{" "}
        <Link to="/cash">Cashflow</Link> | <Link to="/debt">Debt</Link>
      </nav>
      <Expenses />
    </div>
  );
}
