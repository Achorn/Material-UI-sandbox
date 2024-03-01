import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Layout from "./components/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Notes />}></Route>
            <Route path="/create" element={<Create />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
