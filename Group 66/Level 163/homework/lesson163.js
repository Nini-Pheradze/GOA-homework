// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Profile = () => {
//     const [myPosts, setMyPosts] = useState([]);

//     useEffect(() => {
//         const fetchMyPosts = async () => {
//             try {
//                 const token = localStorage.getItem('token'); // ან სადაც ინახავთ ტოკენს
//                 const res = await axios.get('http://localhost:5000/api/posts/my-posts', {
//                     headers: { 'Authorization': `Bearer ${token}` }
//                 });
//                 setMyPosts(res.data);
//             } catch (err) {
//                 console.error("შეცდომა პოსტების ჩატვირთვისას", err);
//             }
//         };

//         fetchMyPosts();
//     }, []);

//     return (
//         <div className="profile-container p-4">
//             <h1 className="text-2xl font-bold mb-4">ჩემი პოსტები</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {myPosts.length > 0 ? (
//                     myPosts.map(post => (
//                         <div key={post._id} className="border p-4 rounded shadow">
//                             <h2 className="font-semibold">{post.title}</h2>
//                             <p>{post.content}</p>
//                             {/* აქ შეგიძლიათ დაამატოთ წაშლის და განახლების ღილაკები */}
//                         </div>
//                     ))
//                 ) : (
//                     <p>თქვენ ჯერ პოსტები არ გაქვთ.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Profile;