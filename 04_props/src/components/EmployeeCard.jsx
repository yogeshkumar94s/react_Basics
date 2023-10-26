/* eslint-disable react/prop-types */
function EmployeeCard({ id, name, position, age, image }) {
  return (
    <>
      <div className='bg-white rounded-lg shadow-md border border-gray-300 max-w-md mx-auto'>
        <p>Employee Name: {name}</p>
        <p>Employee Id: {id}</p>
        <img src={image} className='w-32 h-32 mx-auto rounded-full' />
        <p className='text-gray-600'>Employee Positions: {position}</p>
        <p className='text-gray-600'>Employee Age: {age}</p>
      </div>
    </>
  );
}

export default EmployeeCard;
