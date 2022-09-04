import "../../styles/Dash.css";
import { useState, useRef } from "react";
function DashboardComponent() {
  const [theme, settheme] = useState();
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

  const upload_box = useRef();
  const upload_box2 = useRef();
  const upload_box3 = useRef();
  const upload_box4 = useRef();

  const colorsPallet = {
    lightBG: "#f1f7fc",
    darkBG: "#1B2430",
    dark: "#1B262C",
    blueBG: "#458ce8",
    greyBG: "#3a4447",
    white: "#FFFFFF",
  };
  const changeTheme = () => {
    const folderA = folders_box.current;
    const folderB = folders_box2.current;
    const folderC = folders_box3.current;

    const nameFolderA = nameFolder.current;
    const nameFolderB = nameFolder2.current;
    const nameFolderC = nameFolder3.current;

    const size_textA = sizeRef.current;
    const size_textB = sizeRef2.current;
    const size_textC = sizeRef3.current;

    const nutTxt = nutText.current;
    const header_title = jump_header_title.current;

    const queryStyle = inputQuery.current;

    const newSidebar = sidebar.current;

    const rgt_text = rightText.current;
    const rgt_text2 = rightText2.current;
    const rgt_text3 = rightText3.current;
    const rgt_text4 = rightText4.current;

    const logout_btn = logout.current;
    const theme_btn = theme_change.current;

    const upldBx = upload_box.current;
    const upldBx2 = upload_box2.current;
    const upldBx3 = upload_box3.current;
    const upldBx4 = upload_box4.current;
    if (theme === "light") {
      settheme("dark");
      document.querySelector("body").style.backgroundColor =
        colorsPallet.darkBG;
      folderA.classList.add("setDark");
      folderB.classList.add("setDark");
      folderC.classList.add("setDark");

      nameFolderA.classList.add("setDark");
      nameFolderB.classList.add("setDark");
      nameFolderC.classList.add("setDark");

      size_textA.classList.add("setDark");
      size_textB.classList.add("setDark");
      size_textC.classList.add("setDark");

      nutTxt.classList.add("setDark");
      header_title.classList.add("setDark");

      queryStyle.classList.add("setDark");
      newSidebar.classList.add("setDark");

      rgt_text.classList.add("setDark");
      rgt_text2.classList.add("setDark");
      rgt_text3.classList.add("setDark");
      rgt_text4.classList.add("setDark");

      logout_btn.classList.add("setDark");
      theme_btn.classList.add("setDark");

      upldBx.classList.add("setDark");
      upldBx2.classList.add("setDark");
      upldBx3.classList.add("setDark");
      upldBx4.classList.add("setDark");
    } else {
      settheme("light");
      document.querySelector("body").style.backgroundColor =
        colorsPallet.lightBG;
      folderA.classList.remove("setDark");
      folderB.classList.remove("setDark");
      folderC.classList.remove("setDark");

      nameFolderA.classList.remove("setDark");
      nameFolderB.classList.remove("setDark");
      nameFolderC.classList.remove("setDark");

      size_textA.classList.remove("setDark");
      size_textB.classList.remove("setDark");
      size_textC.classList.remove("setDark");

      nutTxt.classList.remove("setDark");
      header_title.classList.remove("setDark");

      queryStyle.classList.remove("setDark");
      newSidebar.classList.remove("setDark");

      rgt_text.classList.remove("setDark");
      rgt_text2.classList.remove("setDark");
      rgt_text3.classList.remove("setDark");
      rgt_text4.classList.remove("setDark");

      logout_btn.classList.remove("setDark");
      theme_btn.classList.remove("setDark");

      upldBx.classList.remove("setDark");
      upldBx2.classList.remove("setDark");
      upldBx3.classList.remove("setDark");
      upldBx4.classList.remove("setDark");
    }
    if (theme === undefined) {
      settheme("light");
    }
    console.log(theme);
    localStorage.setItem("theme", theme);
    const themeStorage = localStorage.getItem("theme");
    if (themeStorage === "light") {
      console.log("storage set theme to", theme);
    } else if (themeStorage === "dark") {
      console.log("storage set theme to", theme);
    }
  };
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
              <div className="io_upload">
                <div className="upload_box" ref={upload_box}>
                  <i className="fa-solid fa-file-pdf"></i>
                  <h4>Test.pdf</h4>
                </div>
                <div className="upload_box" ref={upload_box2}>
                  <i className="fa-solid fa-file-video"></i>
                  <h4>Movie.mp4</h4>
                </div>
                <div className="upload_box" ref={upload_box3}>
                  <i className="fa-solid fa-file-word"></i>
                  <h4>secrets.docx</h4>
                </div>
                <div className="upload_box" ref={upload_box4}>
                  <i className="fa-solid fa-file-zipper"></i>
                  <h4>app.zip</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="upload_btn">
        <input type="file" name="" id="upload" hidden />
        <label htmlFor="upload">
          <i className="fa-solid fa-cloud-arrow-up"></i>
          <h4>Upload</h4>
        </label>
      </div>
    </div>
  );
}
export default DashboardComponent;
