// import React, {useState, useEffect} from 'react'
// import Header from './header'

// export default class HomePage extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       user: {},
//       error: null,
//       authenticated: false
//     }
//   }

//   componentDidMount() {
//     fetch("http://localhost:3000/auth/login/success", {
//       method: "GET",
//       credentials: "include",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Credentials": true
//       }
//     })
//     .then(response => {
//       if (response.status === 200) return response.json();
//       throw new Error("failed to authenticate user");
//     })
//     .then(responseJson => {
//       this.setState({
//         authenticated: true,
//         user: responseJson.user
//       });
//     })
//     .catch(error => {
//       this.setState({
//         authenticated: false,
//         error: "Failed to authenticate user"
//       });
//     });
//   }
//   render() {
//     const { authenticated } = this.state;
//     return (
//       <div>
//         <Header
//           authenticated={authenticated}
//           handleNotAuthenticated={this._handleNotAuthenticated}
//         />
//         <div>
//           {!authenticated ? (
//             <h1>Welcome!</h1>
//           ) : (
//             <div>
//               <h1>You have logged in succcessfully!</h1>
//               <h2>Welcome {this.state.user.name}!</h2>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }

//   _handleNotAuthenticated = () => {
//     this.setState({ authenticated: false });
//   };
// }

// const HomePage = () => {
//   [loggedIn, setLogIn] = useState(false)
//   [user, setUser] = useState({})

//   return (
//     <>

//     </>
//   )
// }
