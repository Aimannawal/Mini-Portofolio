
import { useState } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.setAttribute(
      "data-theme",
      theme === "light" ? "dark" : "light"
    );
  };

  return <div className="min-h-screen flex flex-col items-center justify-center p-6 gap-6 bg-base-200">
    <div className="avatar">
      <div className="w-24 rounded-full">
        <img src="https://avatars.githubusercontent.com/u/162725086?v=4" alt="avatar" />
      </div>
    </div>

    <div className="text-center">
      <h1 className="text-2xl font-bold">Aiman Wafi'i An Nawal</h1>
      <p className="text-sm max-w-xs">
        Fullstack Development | React, Node js, Php, Laravel, Express js, MongoDB, MySQL
      </p>
    </div>

    <div className="flex flex-col w-full max-w-xs gap-3">
    <a
      className="btn btn-primary btn-outline"
      href="https://github.com/Aimannawal"
      target="_blank"
      >
      GitHub
    </a>

    <a
      className="btn btn-secondary btn-outline"
      href="https://linkedin.com/aiman-wafii-an-nawal/"
      target="_blank"
      >
      LinkedIn
    </a>
    </div>

    <button onClick={toggleTheme} className="btn btn-outline mt-4">
     Toggle {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  </div>
};

export default App
