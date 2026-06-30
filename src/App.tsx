import { Routes, Route, Outlet } from "react-router";
import "./App.css";
import IndexPage from "@/pages/IndexPage";
import CounterPage from "@/pages/CounterPage";
import SignInPage from "@/pages/SignInPage";
import SignUpPage from "@/pages/SignUpPage";
import TodoListPage from "@/pages/TodoListPage";

function AuthLayout() {
  return (
    <div>
      <header>Auth</header>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/todolist" element={<TodoListPage />} />
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
