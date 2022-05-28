import "./styles.css";
import { BrowserRouter, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>React Bookeeping App</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link> | <Link to="/cash">Cashflow</Link>{" "}
        | <Link to="/debt">Debt</Link>
      </nav>
    </div>
  );
}
