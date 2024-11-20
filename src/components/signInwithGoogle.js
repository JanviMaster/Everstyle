import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import googleLogo from "../google.png";

function SignInwithGoogle() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Save user data to Firestore
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          createdAt: new Date(),
        });

        toast.success("User logged in successfully!", {
          position: "top-center",
        });

        // Redirect to profile page
        navigate("/profile");
      }
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") {
        toast.warning("Sign-in cancelled by user.", {
          position: "top-center",
        });
      } else {
        toast.error("An unexpected error occurred. Please try again.", {
          position: "top-center",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <p className="continue-p">-- Or continue with --</p>
      {loading ? (
        <p>Signing in...</p>
      ) : (
        <div
          style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
          onClick={handleGoogleSignIn}
          aria-label="Sign in with Google"
        >
          <img src={googleLogo} alt="Sign in with Google" width={"60%"} />
        </div>
      )}
    </div>
  );
}

export default SignInwithGoogle;

// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { auth, db } from "./firebase";
// import { toast } from "react-toastify";
// import { setDoc, doc } from "firebase/firestore";

// function SignInwithGoogle() {
//   const handleGoogleSignIn = async () => {
//     const provider = new GoogleAuthProvider();

//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;

//       // Save user data to Firestore
//       if (user) {
//         await setDoc(doc(db, "Users", user.uid), {
//           email: user.email,
//           firstName: user.displayName,
//           photo: user.photoURL,
//           lastName: "",
//         });
//         toast.success("User logged in Successfully", {
//           position: "top-center",
//         });

//         // Redirect to profile page
//         window.location.href = "/profile";
//       }
//     } catch (error) {
//       // Handle popup closure or other errors
//       if (error.code === "auth/popup-closed-by-user") {
//         toast.warning("Sign-in cancelled by user.", {
//           position: "top-center",
//         });
//       } else {
//         toast.error(`Error: ${error.message}`, {
//           position: "top-center",
//         });
//       }
//     }
//   };

//   return (
//     <div>
//       <p className="continue-p">-- Or continue with --</p>
//       <div
//         style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
//         onClick={handleGoogleSignIn}
//       >
//         <img
//           src={require("../google.png")}
//           alt="Sign in with Google"
//           width={"60%"}
//         />
//       </div>
//       {/* <button onClick={handleGoogleSignIn} className="btn btn-google">
//         Sign in with Google
//       </button> */}
//     </div>
//   );
// }

// export default SignInwithGoogle;
