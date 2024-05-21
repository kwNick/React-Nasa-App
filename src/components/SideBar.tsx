const SideBar = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="sidebar">
            <div className="bgOverlay"></div>
            <div className="sidebarContents"></div>
            <h2>The Brutal Martian Landscape</h2>
            <div>
                <p>Description</p>
                <p>Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Veritatis
                    repudiandae aliquid veniam est nesciunt, sint consequatur? Alias reiciendis accusamus vel ipsam hic libero saepe nobis consequuntur nihil. Tempora, fugiat at maiores numquam quidem, nam, alias modi perspiciatis esse accusantium in necessitatibus qui animi corporis quibusdam vero quod excepturi officiis iste.
                </p>
            </div>
            {children}
        </div>
    )
}
export default SideBar