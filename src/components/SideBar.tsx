const SideBar = ({ children, handleToggleModal }: { children: React.ReactNode, handleToggleModal: () => void }) => {
    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>The Brutal Martian Landscape</h2>
                <div className="descriptionContainer">
                    <p className="descriptionTitle">Description</p>
                    <p>Lorem ipsum dolor sit,
                        amet consectetur adipisicing elit. Veritatis
                        repudiandae aliquid veniam est nesciunt, sint consequatur? Alias reiciendis accusamus vel ipsam hic libero saepe nobis consequuntur nihil. Tempora, fugiat at maiores numquam quidem, nam, alias modi perspiciatis esse accusantium in necessitatibus qui animi corporis quibusdam vero quod excepturi officiis iste.
                    </p>
                </div>
                {children}
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}
export default SideBar