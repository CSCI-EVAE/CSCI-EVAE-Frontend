import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./components/Layout/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Logout from "./components/Logout"; // Adjust the import path based on your file structure
// import { Box } from "@mui/material";
import Page404 from "./pages/Page404";
import Sidebar from "./components/Layout/sideBar/SidebarPage";

// import Sidebar from "./components/Layout/Sidebar";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./constants/theme";
import LandingPage from "./pages/LandingPage";
// import Header from "./components/Layout/Header";
import { DynamicItem, dummyData } from "./components/Layout/sideBar/importsSidebare";

import Header from "./components/Layout/Header";
function App() {
   



    return (
        <ThemeProvider theme={theme}>
        <div className="App">
            {/* <Header />
            <Sidebar/>
            <Box sx={{ marginBottom: "128px" }}></Box> */}
            <Routes>
            <Route path="/" element={<Sidebar dummyData={dummyData} children={undefined} />}>
          {/* Add more routes here if needed */}
        </Route>
        {dummyData &&
          dummyData.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              element={<DynamicItem page={item.name} />}
            />
          ))}
            
                <Route path="/login" element={<LoginPage />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/Home" element={<LandingPage />} />
               
                    <Route
                        path="/dashboard/*"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
            
                {/* other routes */}
                <Route path="/404" element={<Page404 />} />
                        <Route path="*" element={<Page404 />} />
            </Routes>
            
        </div>
        </ThemeProvider>
    );
}

export default App;
