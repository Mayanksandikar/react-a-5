import React from 'react'

const Home = () => {
    return (
        <div>
          
         <h1 className="h1">   Higher Order Component</h1>
      <p className="p">A higher-order component (HOC) is an advanced technique in React for reusing component logic.</p> 

    <p>HOC is a function that takes a component and returns a new component.</p>


    <h1 className="h1">Reason to use Higher-Order component:</h1>
    <p className="p">Easy to handle</p>
    <p className="p">Get rid of copying the same logic in every component</p>

     <h1 className="h1">Pure Component</h1>
     <p className="p">A React component is considered pure if it renders the same output for the same state and props.</p>

    <p className="p">Component Class compares current state and props with new props and states to decide whether the React component should re-render itself or Not.</p>

    <p className="p">If the previous value of state or props and the new value of state or props is same then component will not re-render.</p>
  </div>
    )
}

export default Home

