import { useState } from "react";
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {
  const [showModal, setShowModal] = useState<boolean | null>(false);
  const handleToggleModal = () => {
    setShowModal(!showModal);
  }
  return (
    <>
      <Main />
      {showModal && (
        <SideBar handleToggleModal={handleToggleModal}>asdasdf asdf</SideBar>
      )}
      <Footer handleToggleModal={handleToggleModal} />
    </>
  )
}

export default App
