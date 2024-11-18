import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          } else {
            console.error("No user document found!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error.message);
        }
      } else {
        console.log("No user is logged in");
        window.location.href = "/login"; // Redirect to login if no user
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("User logged out successfully!");
      window.location.href = "/login";
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {userDetails ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={userDetails.photo}
              alt={`${userDetails.firstName}'s profile`}
              width={"40%"}
              style={{ borderRadius: "50%" }}
            />
          
          <h3>Welcome {userDetails.firstName} 🙏</h3>
          <div>
            <p><strong>Email:</strong> {userDetails.email}</p>
            <p><strong>First Name:</strong> {userDetails.firstName}</p>
            <p><strong>Last Name:</strong> {userDetails.lastName || "Not provided"}</p>
          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
          </div>
        </>
      ) : (
        <div>
        <br/><br/><br/><br/>
        <center><h1>You have successfully logged in!</h1></center>
        </div>
      )}
    </div>
  );
}

export default Profile;
