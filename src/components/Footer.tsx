import { useState } from "react"

const Footer = ({ setSize, size, data, handleToggleModal }: { setSize: any, size: boolean, data: any, handleToggleModal: () => void }) => {

    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>APOD Project</h1>
                <h2>{data?.title}</h2>
            </div>
            <div>
                <button onClick={setSize}>
                    {size ? <i className="fa-solid fa-maximize"></i> : <i className="fa-solid fa-minimize"></i>}

                </button>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-circle-info"></i>
                </button>
            </div>
        </footer>
    )
}

export default Footer