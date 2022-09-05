export function elemeState(
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
) {
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
  const upldBtn = uploadBtn.current;
  return {
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
  };
}
