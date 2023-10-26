const App = () => {
  return (
    <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-blue-300 text-red-500'>
      <h1 className='text-black text-center my-3 text-2xl'>
        Password generator
      </h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value=''
          className='outline-none w-full py-1 px-3 text-lg'
          placeholder='Password'
          readOnly
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range' min={8} max={32} className='cursor-pointer' />
          <label>Length:</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' />
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
    </div>
  );
};

export default App;
