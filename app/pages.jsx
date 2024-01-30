import React from 'react'

const pages = () => {
    return (
        <div className='bg-white rounded-lg mx-4 p-4'>
          <h1 className='text-blue-400 text-2xl'>Multi Step Form</h1>
          <br />
          <br />
          <br />
          {/** Show the step numbers on the form */}
          <multiStepForms showStepNumber={true} /> 
        </div>
      );
}

export default pages
