import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";



import Footer from './components/footer';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      {/* Main Content with Header */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
