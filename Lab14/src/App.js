/* Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  Week 14: Props, State, Events
   JavaScript Lab Week 14*/

/* ----------------------------------------------------- */
// Key Term List:
// React
// Node Packet Manager (NPM)
// Webpack
// Component
// JSX
// JSX Documentation: https://reactjs.org/docs/introducing-jsx.html
// functional programming

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

// Feel free to copy/paste the instructions to different components for easier visibility.

/**
 * !BEFORE YOU START!
 * This lab is a continuation of the Week 13 Lab.
 * It is not necessary to finish the Week 13 Lab to work on this one.
 *
 * You are welcome to use this project, or if you did complete the Week 13 lab,
 * just copy/paste the new directions from here into your project.
 */

/* ------------------ Part 1: State/Constructor/Props --------------------- */
/**
 * REMINDER: Start your developer server by moving to your project in your terminal, then type 'npm start'
 *
 * Goal: Pass information using props from our App.js to a new component, Appointments.js.
 *
 * Step 1: Create a new component in your src folder called 'Appointments.js'
 *         Create the base format for a Function based component in Appointments.js
 *
 * Step 2: Import your Appointments.js component in your App.js component.
 *
 * Step 3: Let's hold our information in our App.js, and pass that information
 *         as a prop to our <Appointments/> component.
 *
 *         Copy/paste the code below our imports in App.js:
 *                (If you hold the left mouse button and drag,
 *                 it should highlight the text to copy/paste)
 *
 *                 let allCustomers = [
 *               {
 *                 firstName: 'Shawn',
 *                 lastName: 'Lennon',
 *                 appointmentTime: '1:00PM',
 *               },
 *               {
 *                 firstName: 'Jewel',
 *                 lastName: 'Ronnie',
 *                 appointmentTime: '2:00PM',
 *               },
 *               {
 *                 firstName: 'Martie',
 *                 lastName: 'Francis',
 *                 appointmentTime: '3:00PM',
 *               },
 *             ]
 *
 * Step 4: Create a property on the <Appointments/> component called 'customers',
 *         set it equal to our variable, allCustomers
 *
 *         Does this look familiar? <img src="someUrl.com"/> ... src is also a prop/property.
 *
 *         Hint: <Appointments customers={customers} />
 *
 * Step 5: In function based components we hold state inside the function, usually in the first few lines of the function. We also must import state from react.
 *         Then in the declaration line of the function recieving the data (Appointments.js) we will take in the props.
 *
 *          For more information on Props: https://www.w3schools.com/react/react_props.asp
 *          For more information on useState: https://www.w3schools.com/react/react_usestate.asp
 *
 *
 * */

/* ------------------ Part 2: Creating our Table  --------------------- */

/** Note: Feel free to copy/paste this into your Appointments.js for easier visibility.
 *
 * Goal: Create a table that renders customers.
 *
 * Step 1: Create a table with a thead/tbody. The thead should have a row with
 *         3 th elements: First Name, Last Name, and Appointment Time.
 * Step 2: Inside of your tbody, create a <tr> element that will .map()
 *         over customers and return
 *         3 <td> elements, one for firstName, lastName, and appointmentTime.
 *
 *         Check the README for a .map() hint.
 * Step 3: Style it with css using the App.css file!
 *          Some things you may want to do: Adjust text alignment, colors, border, font-sizes.
 */

/* -- ALL YOUR COMPONENT/STYLE IMPORTS HERE -- */
import "./App.css";
import Nav from "./Nav";

let date = new Date();

let singleUser = {
  name: "Jane Smith",
  todaysDate: date.toDateString(),
};

function App() {
  return (
    <div className='App'>
      <Nav />
      <section className='welcomeSection'>
        <h1>Welcome, {singleUser.name}</h1>
        <p>Todays date is: {singleUser.todaysDate}</p>
      </section>
    </div>
  );
}

export default App;
