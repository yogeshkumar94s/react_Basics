import { useState, useCallback, useEffect } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(true);
  const [charAllow, setCharAllow] = useState(true);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNIPQRSTUVWXYZ";

    if (numberAllow) str += "0123456789";
    if (charAllow) str += "~!@#$%&*(){}[]";

    for (let i = 1; i <= length; i++) {
      const charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllow, charAllow, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, charAllow, passwordGenerator]);

  return (
    <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-600 text-white'>
      <h1 className='text-white text-center my-3 text-2xl'>
        Password generator
      </h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3 text-lg text-orange-600'
          placeholder='Password'
          readOnly
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={8}
            max={32}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            className='cursor-pointer'
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numberAllow}
            id='numberInput'
            onChange={() => {
              setNumberAllow((prev) => !prev);
            }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={charAllow}
            id='charInput'
            onChange={() => {
              setCharAllow((prev) => !prev);
            }}
          />
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
    </div>
  );
};

export default App;
