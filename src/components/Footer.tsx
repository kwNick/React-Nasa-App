
const Footer = ({ handleToggleModal }: { handleToggleModal: () => void }) => {
    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2>the Brutal Martian Landscape</h2>
                <h1>APOD Project</h1>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}

export default Footer