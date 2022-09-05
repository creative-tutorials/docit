export function setupAuthentication(
  signInWithPopup,
  auth,
  provider,
  GoogleAuthProvider
) {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      localStorage.setItem("access_token", token); // The signed-in user info.

      const user = result.user;
      console.log(user); // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message; // The email of the user's account used.

      const email = error.customData.email; // The AuthCredential type that was used.

      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorMessage, credential, email, errorCode, errorMessage);
    });
}
