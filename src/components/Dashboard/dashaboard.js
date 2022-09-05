import { calculateFileSize } from "../Calculate/Calculate";
import { elemeState } from "../elements/elem";
import { darkTheme } from "../theme/dark/darkThme";
import { lightTheme } from "../theme/light/lightTheme";
import "../../styles/Dash.css";
import { useState, useRef, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MESUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
// Create a root reference
const storage = getStorage();
const db = getFirestore(app);
function DashboardComponent() {
  const [theme, settheme] = useState("light");
  useEffect(() => {
    LoadPage();

    // fetchUploadContent();
    return () => {
      if (!fetchUploadContent) {
        console.log("x");
      } else {
        return fetchUploadContent();
      }
    };
  });

  const folders_box = useRef();
  const folders_box2 = useRef();
  const folders_box3 = useRef();

  const nameFolder = useRef();
  const nameFolder2 = useRef();
  const nameFolder3 = useRef();

  const sizeRef = useRef();
  const sizeRef2 = useRef();
  const sizeRef3 = useRef();

  const nutText = useRef();
  const jump_header_title = useRef();

  const inputQuery = useRef();

  const sidebar = useRef();

  const rightText = useRef();
  const rightText2 = useRef();
  const rightText3 = useRef();
  const rightText4 = useRef();

  const logout = useRef();
  const theme_change = useRef();

  const uploadBtn = useRef();

  const fileInput = useRef();

  const pop_content = useRef();

  const txtContent = useRef();

  const filename = useRef();
  const filesize = useRef();

  const io_upload = useRef();
  const colorsPallet = {
    lightBG: "#f1f7fc",
    darkBG: "#1B2430",

    /**
     * The changeTheme function changes the theme of the app.
     *
     *
     *
     * @return The theme
     *
     */
  };
  const changeTheme = () => {
    const {
      folderA,
      folderB,
      folderC,
      nameFolderA,
      nameFolderB,
      nameFolderC,
      size_textA,
      size_textB,
      size_textC,
      nutTxt,
      header_title,
      queryStyle,
      newSidebar,
      rgt_text,
      rgt_text2,
      rgt_text3,
      rgt_text4,
      logout_btn,
      theme_btn,
      upldBtn,
    } = elemeState(
      folders_box,
      folders_box2,
      folders_box3,
      nameFolder,
      nameFolder2,
      nameFolder3,
      sizeRef,
      sizeRef2,
      sizeRef3,
      nutText,
      jump_header_title,
      inputQuery,
      sidebar,
      rightText,
      rightText2,
      rightText3,
      rightText4,
      logout,
      theme_change,
      uploadBtn
    );
    if (theme === "light") {
      settheme("dark");
      document.querySelector("body").style.backgroundColor =
        colorsPallet.darkBG;
      darkTheme(
        folderA,
        folderB,
        folderC,
        nameFolderA,
        nameFolderB,
        nameFolderC,
        size_textA,
        size_textB,
        size_textC,
        nutTxt,
        header_title,
        queryStyle,
        newSidebar,
        rgt_text,
        rgt_text2,
        rgt_text3,
        rgt_text4,
        logout_btn,
        theme_btn,
        upldBtn
      );
    } else {
      settheme("light");
      document.querySelector("body").style.backgroundColor =
        colorsPallet.lightBG;
      lightTheme(
        folderA,
        folderB,
        folderC,
        nameFolderA,
        nameFolderB,
        nameFolderC,
        size_textA,
        size_textB,
        size_textC,
        nutTxt,
        header_title,
        queryStyle,
        newSidebar,
        rgt_text,
        rgt_text2,
        rgt_text3,
        rgt_text4,
        logout_btn,
        theme_btn,
        upldBtn
      );
    }
    if (theme === undefined) {
      settheme("dark");
    }
    // console.log(theme);
    localStorage.setItem("theme", theme);
    const themeStorage = localStorage.getItem("theme");
    if (themeStorage === "light") {
      console.log("previous theme was", theme);
      settheme("dark");
      localStorage.setItem("theme", "dark");
    } else if (themeStorage === "dark") {
      console.log("previous theme was", theme);
      settheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  const LoadPage = () => {
    console.log("load");
    const theme = localStorage.getItem("theme");
    const {
      folderA,
      folderB,
      folderC,
      nameFolderA,
      nameFolderB,
      nameFolderC,
      size_textA,
      size_textB,
      size_textC,
      nutTxt,
      header_title,
      queryStyle,
      newSidebar,
      rgt_text,
      rgt_text2,
      rgt_text3,
      rgt_text4,
      logout_btn,
      theme_btn,
      upldBtn,
    } = elemeState(
      folders_box,
      folders_box2,
      folders_box3,
      nameFolder,
      nameFolder2,
      nameFolder3,
      sizeRef,
      sizeRef2,
      sizeRef3,
      nutText,
      jump_header_title,
      inputQuery,
      sidebar,
      rightText,
      rightText2,
      rightText3,
      rightText4,
      logout,
      theme_change,
      uploadBtn
    );
    if (theme === "dark") {
      console.log("theme is dark");
      document.querySelector("body").style.backgroundColor =
        colorsPallet.darkBG;
      darkTheme(
        folderA,
        folderB,
        folderC,
        nameFolderA,
        nameFolderB,
        nameFolderC,
        size_textA,
        size_textB,
        size_textC,
        nutTxt,
        header_title,
        queryStyle,
        newSidebar,
        rgt_text,
        rgt_text2,
        rgt_text3,
        rgt_text4,
        logout_btn,
        theme_btn,
        upldBtn
      );
    } else {
      document.querySelector("body").style.backgroundColor =
        colorsPallet.lightBG;
      lightTheme(
        folderA,
        folderB,
        folderC,
        nameFolderA,
        nameFolderB,
        nameFolderC,
        size_textA,
        size_textB,
        size_textC,
        nutTxt,
        header_title,
        queryStyle,
        newSidebar,
        rgt_text,
        rgt_text2,
        rgt_text3,
        rgt_text4,
        logout_btn,
        theme_btn,
        upldBtn
      );
    }
  };
  const handleFileUpload = (e) => {
    /**
   * The handleFileUpload function is used to upload a file from the user's computer
   * to Firebase Storage. It takes in an event object as a parameter, which contains
   * information about the file that was uploaded. The function then uses FileReader
   * and uploadBytes functions to read the contents of the file and upload it to Firebase. 
   
   *
   * @param e Get the file that is being uploaded
   *
   * @return The value of the text content
   *
   * @docauthor Trelent
   */
    /** @type {*} */
    const text = txtContent.current;
    const fileName = filename.current;
    const fileSize = filesize.current;
    const upldBtn = uploadBtn.current;
    const popup = pop_content.current;
    const io_uploads = io_upload.current;
    const targetName = e.target.files[0].name;
    const targetSize = e.target.files[0].size;
    const reader = new FileReader();
    console.log(reader);
    // use File Reader
    const files = fileInput.current.files.item(0);
    console.log(files);
    // Create a reference to 'mountains.jpg'
    const storageRef = ref(storage, "uploads/" + targetName);
    text.textContent = "Uploading";
    upldBtn.classList.add("active");

    uploadBytes(storageRef, files).then((snapshot) => {
      console.log("Uploaded a blob or file!");
      text.textContent = "Upload";
      upldBtn.classList.remove("active");

      // function humanFileSize(bytes, si = false, dp = 1) {

      // }
      const humanFileSize = calculateFileSize();

      changeElementSate();
      sendFileRequest();

      const docRef = addDoc(collection(db, "uploads"), {
        filename: targetName,
        size: humanFileSize(targetSize),
      });
      console.log("Document written with ID: ", docRef.id);
      async function sendFileRequest() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          filename: targetName,
          filesize: humanFileSize(targetSize),
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch("http://localhost:4000/uploads/upld", requestOptions)
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      }
      async function changeElementSate() {
        const createNew = document.createElement("div");
        createNew.innerHTML = `<div class="upload_box upload_boxs">
        <i class="fa-solid fa-file-zipper"></i>
        <h4>${targetName}</h4>
      </div>`;
        io_uploads.appendChild(createNew);
        fileName.innerHTML = targetName;
        fileSize.innerHTML = humanFileSize(targetSize);
        popup.classList.add("active");
        setTimeout(() => {
          popup.classList.remove("active");
        }, 3000);
      }
    });

    reader.onload = (e) => {
      console.log(reader.result);
    };
    reader.readAsDataURL(files);
  };
  const fetchUploadContent = () => {
    const io_uploads = io_upload.current;
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:4000/uploads", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.table(result);
        const newResult = result;
        newResult.forEach((item) => {
          console.log("item", item);
          const createNew = document.createElement("div");
          createNew.innerHTML = `<div class="upload_box upload_boxs">
          <i class="fa-solid fa-file-zipper"></i>
          <h4>${item.filename}</h4>
        </div>`;
          io_uploads.appendChild(createNew);
        });
      })
      .catch((error) => console.log("error", error));
  };
  /**
   * The CheckAuth function checks to see if the user is logged in. If they are not, it redirects them to the signup page.
   *
   *
   *
   * @return A boolean value
   */
  const CheckAuth = () => {
    const access_token = localStorage.getItem("access_token");
    if (!access_token) {
      window.location.pathname = "/signup";
    }
  };
  
  CheckAuth();
  return (
    <div className="dashboard">
      <div className="container">
        <div className="sidebar" ref={sidebar}>
          <div className="top">
            <div className="logo">
              <i className="fa-solid fa-a"></i>
              <i className="fa-solid fa-p"></i>
              <i className="fa-solid fa-p"></i>
            </div>
          </div>
          <div className="top-s2">
            <div className="s2-list" ref={rightText}>
              <div className="list-left">
                <i className="fa-regular fa-folder"></i>
              </div>
              <div className="list-right">
                <h4>My Files</h4>
              </div>
            </div>
            <div className="s2-list" ref={rightText2}>
              <div className="list-left">
                <i className="fa-solid fa-trash"></i>
              </div>
              <div className="list-right">
                <h4>Recycle Bin</h4>
              </div>
            </div>
            <div className="s2-list" ref={rightText3}>
              <div className="list-left">
                <i className="fa-solid fa-share-nodes"></i>
              </div>
              <div className="list-right">
                <h4>Shared Files</h4>
              </div>
            </div>
            <div className="s2-list" ref={rightText4}>
              <div className="list-left">
                <i className="fa-solid fa-gear"></i>
              </div>
              <div className="list-right">
                <h3>Settings</h3>
              </div>
            </div>
          </div>
          <div className="bottom-s3">
            <div className="s3-menus">
              <div className="logout_btn" ref={logout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <p>Logout</p>
              </div>
              <div className="center_btn">
                <div
                  className="theme_btn"
                  onClick={changeTheme}
                  ref={theme_change}
                >
                  <i className="fa-solid fa-moon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="header">
            <div className="search-field">
              {/* search icon */}
              <input
                type="text"
                name="q"
                placeholder="Search"
                id="q"
                ref={inputQuery}
              />
            </div>
          </div>
          <div className="wrapper-element">
            <h2>
              <i className="fa-solid fa-folder"></i>
              <span id="nut-text" ref={nutText}>
                My Files
              </span>
            </h2>
            <div className="folders_box">
              <div className="folders ACD" ref={folders_box}>
                <i className="fa-solid fa-folder"></i>
                <h2 id="folder-name" ref={nameFolder}>
                  Documents
                </h2>
                <p id="folder-size" ref={sizeRef}>
                  2.5 GB
                </p>
              </div>
              <div className="folders DER" ref={folders_box2}>
                <i className="fa-solid fa-folder"></i>
                <h2 id="folder-name" ref={nameFolder2}>
                  Music
                </h2>
                <p id="folder-size" ref={sizeRef2}>
                  1.0 MB
                </p>
              </div>
              <div className="folders EHA" ref={folders_box3}>
                <i className="fa-solid fa-folder"></i>
                <h2 id="folder-name" ref={nameFolder3}>
                  Personal
                </h2>
                <p id="folder-size" ref={sizeRef3}>
                  2 KB
                </p>
              </div>
            </div>
            <div className="file_io">
              <div className="jump_header">
                <i className="fa-solid fa-folder"></i>
                <h2 id="jump_header-title" ref={jump_header_title}>
                  All Files
                </h2>
              </div>
              <div className="io_upload" ref={io_upload}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="upload_btn" ref={uploadBtn}>
        <input
          type="file"
          name=""
          id="upload"
          hidden
          onChange={handleFileUpload}
          ref={fileInput}
        />
        <label htmlFor="upload">
          <i className="fa-solid fa-cloud-arrow-up"></i>
          <h4 ref={txtContent}>Upload</h4>
        </label>
      </div>
      <div className="pop_up" ref={pop_content}>
        <div className="pop_content">
          <div className="filename">
            {" "}
            <h5>Uploaded</h5>{" "}
            <span id="filename" ref={filename}>
              Test.txt
            </span>
          </div>
          <div className="filesize" ref={filesize}>
            2.4kb
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashboardComponent;
