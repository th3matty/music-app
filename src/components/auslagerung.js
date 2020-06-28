// import React, { useState, useEffect } from "react";
// import UserProfileIcon from "../assets/img/userProfile.svg";
// import Logout from '../assets/img/logout.svg';
// import waait from 'waait';

// function Header({ token }) {
// 	const [userProfile, setUserProfile] = useState({});
// 	const [userPic, setUserPic] = useState(UserProfileIcon);

// 	useEffect(() => {
// 		async function getProfile() {
// 			const response = await fetch('https://api.spotify.com/v1/me', {
// 				headers: {
// 					Authorization: `Bearer ${token}`,
// 				},
// 			});

// 			const profile = await response.json();
// 			console.log('profile', profile);
// 			setUserProfile(profile);
//       await waait(100);
//       if (profile.images.length) {
// 				setUserPic(profile.images[0].url);
// 			}
// 		}
// 		getProfile();
// 	}, [token]);

//   // console.log('userProfile:',userProfile)

//   //fixed top-0 inset-x-0
//   return (
//     <div className="w-full ">
//       <div className="flex items-center justify-end bg-gray_aside text-white text-sm overflow-hidden fixed top-0 inset-x-0 ">
//         <span>{userProfile.display_name}</span>
//         <a href="!#" className=" mt-2 ml-2">
//           <img src={userPic} className="w-10 h-10 rounded-full mb-2" alt="UserProfileIcon" />
//         </a>
//         <a href="!#" className=" mt-2 ml-2">
//           <img src={Logout} className="mr-2 ml-2 mb-2 justify-end" alt="LogoutIcon" />
//         </a>
//       </div>

//     </div>
//   );
// }

// export default Header;

// Lyrics:

// {
//   /* <h1
//             onClick={this.UpdateState}
//           >
//             {this.state.trackName}
//           </h1> */
// }
// {
//   /* <h3 className="font-bold"> {this.state.album}</h3> */
// }


// if (profileImage){
//     setUserPic(profile.images[0].url)
// }}
// let lengthIsthere = () => profile.images.length;
//       let profileImage = profile.some(lengthIsthere);
//       let getUserPic = () => {
//         if (profileImage) {
//           setUserPic(profile.images[0].url);
//         }
// 	  };
// 	  getUserPic();


// let userPicPath = profile.images[0].url;
// 	  console.log('Unser Profile.Images:',profile.images[0])
//       console.log("Type:", typeof userPicPath);
//       console.log("userPic", userPicPath);
//       let userPic = userPicPath;

//       let catchedProfilePic = userPic.hasOwnProperty('images');
// 	  console.log("it worked, i got the boolean", catchedProfilePic);
	  
// 	  if(catchedProfilePic ===true){
// 		setUserPic(profile.images[0].url)
// 	  }


// <div>
//       <form>
//         <div className="flex items-center mt-1">
//           <div>
//             {/* <li className="border-l-4 border-colorPallete_Blue"> */}
//             <button onClick={openModal} className="flex -1 ml-5 mr-3">
//               <img src={SearchIcon} className="mr-1" alt="SearchIcon" />
//             </button>
//             <Modal
//               className="modal"
//               style={customStyles}
//               isOpen={modalIsOpen}
//               onRequestClose={closeModal}
//             >
//               {/* <div>
//                 <div className="modal-wrapper">
//                   <div className="modal-backdrop" />
//                   <div className="modal-box">                 */}
//                     {/* <header className="bg-gray_aside">
//                       <div>
//                         <button onClick={closeModal}>
//                           <img src={CloseButton} className="" alt="Close" />
//                         </button>
//                       </div>
//                     </header> */}
//                     {/* An dieser Stelle kann man auslagern. */}
//                     {/* <SearchModal onRequestClose={closeModal}/> */}
//                   {/* </div>
//                 </div>
//               </div> */}
//             </Modal>
//           </div>
//           {/* </li> */}
//           <input
//             id="inputSearch"
//             value={searchValue}
//             onChange={(e) => handleChange(e.target.value)}
//             type="text"
//             className="py-2 mt-2 focus:bg-white focus:border-blue-400  hover:bg-colorPallete_LightGreen focus:outline-1 focus:shadow-outline border border-colorPallete_Blue rounded-lg appearance-none leading-normal text-colorPallete_Blue text-lg text-center "
//           ></input>
//         </div>
//       </form>
//     </div>
  