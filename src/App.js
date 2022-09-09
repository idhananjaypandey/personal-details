import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [screen, setScreen] = useState('1');

  const [error, setError] = useState(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setStateAddress] = useState('');

  const [account, setAccount] = useState('');
  const [ifsc, setIFSC] = useState('');

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChangeEmail = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }
    setEmail(event.target.value);
  };

  const handleChangeMobile = event => {
    if (event.target.value.length > 10) {
      setError('Mobile is invalid');
    } else {
      setError(null);
    }
    setMobile(event.target.value);
  };

  return (
    <div style={{ top: '0px', left: '0px', right: '0px', bottom: '0px', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ padding: '20px', borderRadius: '10px', position: 'absolute', boxShadow: '1px 2px #888888', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: 'yellow' }}>
        {screen == '1' ? <form style={{ display: 'flex', flexDirection: 'column', width: '250px' }}>
          <h2>Personal Details</h2>
          <input onChange={(event) => {
            setName(event.target.value);
          }} value={name} style={{ height: '40px', borderRadius: '10px', margin: '10px', borderWidth: '1px' }} type="text" name="name" placeholder="Enter your name" />
          <input style={{ height: '40px', borderRadius: '10px', margin: '10px', borderWidth: '1px' }}
            value={email}
            onChange={handleChangeEmail} type="text" name="name" placeholder="Enter your email" />
          <input style={{ height: '40px', borderRadius: '10px', margin: '10px', borderWidth: '1px' }}
            value={mobile}
            onChange={handleChangeMobile} type="text" name="name" placeholder="Enter your email" />
          {error && <h5 style={{ color: 'red' }}>{error}</h5>}
          <button style={{ height: '40px', borderRadius: '10px', margin: '10px', backgroundColor: 'purple', color: 'white', borderWidth: '1px' }} onClick={(event) => {
            event.preventDefault();
            setScreen('2');
          }}>
            Next
          </button>
        </form> : null}
        {screen == '2' ? <form style={{ display: 'flex', flexDirection: 'column', width: '250px' }}>
          <h2>Address</h2>
          <input onChange={(event) => {
            setAddress(event.target.value);
          }} value={address} style={{ height: '40px', borderRadius: '10px', margin: '10px', borderWidth: '1px' }} type="text" name="name" placeholder="Enter your address" />
          <input onChange={(event) => {
            setCity(event.target.value);
          }} value={city} style={{ height: '40px', borderRadius: '10px', margin: '10px', borderWidth: '1px' }} type="text" name="name" placeholder="Enter your city" />
          <input onChange={(event) => {
            setStateAddress(event.target.value);
          }} value={state} style={{ height: '40px', borderRadius: '10px', margin: '10px', borderWidth: '1px' }} type="text" name="name" placeholder="Enter your state" />
          <button style={{ height: '40px', borderRadius: '10px', margin: '10px', backgroundColor: 'purple', color: 'white', borderWidth: '1px' }} onClick={(event) => {
            event.preventDefault();
            setScreen('3');
          }}>
            Next
          </button>
        </form> : null}
        {screen == '3' ? <form style={{ display: 'flex', flexDirection: 'column', width: '250px' }}>
          <h2>Account Details</h2>
          <input onChange={(event) => {
            setAccount(event.target.value);
          }} value={account} style={{ height: '40px', borderRadius: '10px', margin: '10px', borderWidth: '1px' }} type="text" name="name" placeholder="Enter your account number" />
          <input onChange={(event) => {
            setIFSC(event.target.value);
          }} value={ifsc} style={{ height: '40px', borderRadius: '10px', margin: '10px', borderWidth: '1px' }} type="text" name="name" placeholder="Enter your IFSC Code" />
          <button style={{ height: '40px', borderRadius: '10px', margin: '10px', backgroundColor: 'purple', color: 'white', borderWidth: '1px' }} onClick={(event) => {
            event.preventDefault();
            setScreen('4');
          }}>
            Done
          </button>
        </form> : null}
        {screen == '4' ? <form style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div>
            <h2>Personal Details</h2>
            <h5>Name: {name}</h5>
            <h5>Email: {email}</h5>
            <h5>Mobile: {mobile}</h5>
          </div>
          <div style={{ margin: '20px' }} />
          <div>
            <h2>Address </h2>
            <h5>Address: {address}</h5>
            <h5>City: {city}</h5>
            <h5>State: {state}</h5>
          </div>
          <div style={{ margin: '20px' }} />
          <div>
            <h2>Account Details </h2>
            <h5>Account No.: {account}</h5>
            <h5>IFSC Code: {ifsc}</h5>
          </div>
          <button style={{ height: '40px', borderRadius: '10px', margin: '10px', backgroundColor: 'purple', color: 'white', borderWidth: '1px' }} onClick={(event) => {
            console.log('Here');
          }}>
            Reset
          </button>
        </form> : null
        }
      </div >
      <div style={{ left: '50px', right: '50px', bottom: '20px', position: 'absolute', height: '50px', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <div onClick={() => {
          setScreen('1');
        }} style={{ height: '50px', width: '30%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
          <h3 style={{ backgroundColor: screen == '1' ? 'darkblue' : 'grey', color: screen == '1' ? 'white' : 'black', padding: 12.5, borderRadius: '50px' }}>1</h3>
        </div>

        <div onClick={() => {
          setScreen('2');
        }} style={{ height: '50px', width: '30%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
          <h3 style={{ backgroundColor: screen == '2' ? 'darkblue' : 'grey', color: screen == '2' ? 'white' : 'black', padding: 12.5, borderRadius: '50px' }}>2</h3>
        </div>
        <div onClick={() => {
          setScreen('3');
        }} style={{ height: '50px', width: '30%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
          <h3 style={{ backgroundColor: screen == '3' ? 'darkblue' : 'grey', color: screen == '3' ? 'white' : 'black', padding: 12.5, borderRadius: '50px' }}>3</h3>
        </div>
      </div>
    </div >
  );
}

export default App;
