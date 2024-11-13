import { useState, useCallback, useEffect } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copySuccess, setCopySuccess] = useState(""); // State for copy confirmation

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
    setCopySuccess(""); // Reset copy message on new password generation
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password).then(() => {
      setCopySuccess("Password copied to clipboard!");
      setTimeout(() => setCopySuccess(""), 2000); // Clear message after 2 seconds
    }).catch(() => {
      setCopySuccess("Failed to copy password.");
    });
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600">
        <h1 className="text-xl font-bold mb-4 mt-2 ml-2 mr-2">Password Generator</h1>
        
        <div className="flex shadow rounded-lg overflow-hidden mb-4 mx-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 my-2 ml-1 mr-1"
            placeholder="Password"
            readOnly
          />
          <button
            onClick={handleCopyPassword}
            className="outline-none bg-blue-700 text-white px-1 py-0 shrink-0"
          >
            Copy
          </button>
        </div>
        
        {copySuccess && <p className="text-green-500 text-sm mb-2">{copySuccess}</p>}
        
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8} // Set minimum length to 8
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(parseInt(e.target.value, 10))}
            />
            <label>Length: {length}</label>
          </div>
          
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
