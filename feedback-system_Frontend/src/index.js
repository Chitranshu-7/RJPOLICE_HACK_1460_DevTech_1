import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from './Componants/Home';
// import Registration from './Registration';
import Registration from './Componants/Registration';
import Feedback from './Componants/Feedback';
import EmailVerification from './EmailVerification';
import App from './Componants/App';
import './index.css';
import Citizenport from './Componants/Citizenport';
import Policestation from './Componants/Policestation';
import Higherauthor from './Componants/Higherauthor';
import Login from './Componants/Login';
import Trackfir from './Componants/Trackfir';
import Providefeedback from './Componants/Providefeedback';
import Feedbackfir from './Componants/Feedbackfir';
import Appointment from './Componants/Appointment';
import Suggestion from './Componants/Suggestion';
import Otp from './Componants/Otp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/* <App/> */}

{/* <Citizenport/> */}
{/* <Suggestion/>/ */}
{/* <Appointment/> */}
{/* <Providefeedback/> */}
{/* <Feedbackfir/> */}
{/* <Feedback/> */}
<App/>
{/* <Trackfir/> */}
{/* <Policestation/> */}
{/* <Higherauthor/> */}
{/* <Login/> */}
{/* <Home/> */}
{/* <Otp/> */}

{/* <Registration/> */}
{/* <EmailVerification/> */}
{/* <Registration/> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
