import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";

function SignInwithGoogle() {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Save user data to Firestore
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        toast.success("User logged in Successfully", {
          position: "top-center",
        });

        // Redirect to profile page
        window.location.href = "/profile";
      }
    } catch (error) {
      // Handle popup closure or other errors
      if (error.code === "auth/popup-closed-by-user") {
        toast.warning("Sign-in cancelled by user.", {
          position: "top-center",
        });
      } else {
        toast.error(`Error: ${error.message}`, {
          position: "top-center",
        });
      }
    }
  };

  return (
    <div>
      <p className="continue-p">-- Or continue with --</p>
      <div
        style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}
        onClick={handleGoogleSignIn}
      >
        <img
          src={require("../google.png")}
          alt="Sign in with Google"
          width={"60%"}
        />
      </div>
      <button onClick={handleGoogleSignIn} className="btn btn-google">
        Sign in with Google
      </button>
    </div>
  );
}

export default SignInwithGoogle;
