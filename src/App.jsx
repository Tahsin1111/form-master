
import './App.css'
import HookForm from './components/HookForm/HookForm'
import RefForm from './components/RefForm/RefForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {
  const handleSignUpSubmit = e =>{
    e.preventDefault();
   }


  return (
    <>

      <h1>Vite + React</h1>
      
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>sign up</h2>
          <p>please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm formTitle={'Profile Update'}>
        <div>
          <h2>Update Profile</h2>
          <p>always keep updated</p>
        </div>
      </ReusableForm>
    </>
  )
}

export default App
