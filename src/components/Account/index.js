import Cookies from 'js-cookie'
// import Popup from 'reactjs-popup'

import Footer from '../Footer'
import Header from '../Header'

import './index.css'

const Account = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  // const username = localStorage.getItem('username')
  // const password = localStorage.getItem('password')
  // const passwordInAsterisk = '*'.repeat(password.length)

  return (
    <div className="account-root-container">
      <Header />
      <div className="account-details-container">
        <div className="responsive-container">
          <h1 className="account-heading">Account</h1>
          <hr className="hr-line" />
          <div className="member-details-container">
            <p className="membership-heading">Member ship</p>
            <div>
              <p className="membership-email">jaiprasadkowru@gmail.com</p>
              <p className="membership-password">Password : **********</p>
            </div>
          </div>
          <hr className="hr-line" />
          <div className="membership-container">
            <p className="plan-details">Plan details</p>
            <div className="plan-details-container">
              <p className="membership-premium">Premium</p>
              <p className="ultra-hd">Ultra HD</p>
            </div>
          </div>
          <hr className="hr-line" />
          <div className="account-logout-container">
            <button
              className="account-logout"
              type="button"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

// ;<Popup modal trigger={} className="logout-popup">
//   {close => (
//     <div className="popup-container">
//       <p className="logout-description">Are you sure, you want to logout?</p>
//       <div>
//         <button type="button" className="cancel-logout" onClick={() => close()}>
//           Cancel
//         </button>
//         <button type="button" className="confirm-logout">
//           Confirm
//         </button>
//       </div>
//     </div>
//   )}
// </Popup>

export default Account
