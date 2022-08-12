import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../Firebase";




export const signupApi = (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {

        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user);


                onAuthStateChanged(auth, (user) => {
                    if (user) {

                        sendEmailVerification(user);
                        const uid = user.uid;
                    } else {

                    }
                });

            })
            .then((emailsVerified) => {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        if (user.emailVerified) {
                            resolve({ payload: "Email Successfully!" });
                        } else {
                            resolve({ payload: "Please Verifi Your Email" });
                        }
                    } else {
                        reject({ payload: "somthing went wronge." });
                    }
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                    reject({ payload: "email already registered." });
                } else {
                    reject({ payload: errorCode });
                }


            });

    })
}

export const loginApi = (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {

        signInWithEmailAndPassword(auth, data.email, data.password)

            .then((user) => {
                if (user.user.emailVerified) {
                    resolve({ payload: user.user });
                }
                else {
                    reject({ payload: "please verfity your email" });
                }
                // console.log(user);        
            })

            .catch((error) => {
                if (error.code.localeCompare("auth/wrong-password") === 0) {
                    reject({ payload: "wrong email or password" })
                }
                else if (error.code.localeCompare("auth/user-not-found") === 0) {
                    reject({ payload: "user not found" })
                }
                else {
                    reject({ payload: error.code });
                }
                // console.log(error); 
            });

    })
}

export const logoutAPI = () => {
    return new Promise((resolve, reject) => {
        signOut(auth)
            .then((user) => {
                resolve({payload: "LogOut Successfully"});
            })
            .catch((error) => {
                reject({payload: "Something Went Wrong"});
            })
    })
}