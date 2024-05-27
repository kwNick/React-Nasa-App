
const Main = ({ size, data }: { size: boolean, data: any }) => {
    return (
        <div className="imgContainer">
            <img src={data?.hdurl || "mars.png"} alt={data?.title || 'bgImage'} className={`${size ? 'bgImgContain' : 'bgImgCover'}`} />
        </div>
    )
}

export default Main