// import {Component} from "react";
//
// const TryC =()=>{
//     const users = []
//
//
//
//     const getRandomUsers=()=> {
//         const res = await fetch(`https://randomuser.me/api/?results=10`);
//         const data = await res.json();
//         return data.results;
//     }
//
//     async componentDidMount() {
//         this.mounted = true;
//         if (this.mounted){
//             const users = await this.getRandomUsers();
//             this.setState({ users });
//         }
//
//     }
//
//
//     render() {
//         return (
//             <div>
//                 {this.state.users.map((user) => (
//                     <User
//                         name={`${user.name.first} ${user.name.last}`}
//                         avatar={user.picture.thumbnail}
//                         email={user.email}
//                         key={user.email}
//                     />
//                 ))}
//             </div>
//         );
//     }
//
// }
// const User = ({ name, avatar, email}) => {
//     const onChildButtonClick = (val) =>{
//         console.log(val);
//     }
//     return(
//         <div>
//             <img src={avatar} onClick={()=>console.log()} />
//             <div>
//                 <p>{name}</p>
//                 <p>{email}</p>
//             </div>
//         </div>);
// }
//
