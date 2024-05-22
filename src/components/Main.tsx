
const Main = ({ data }: { data: any }) => {
    return (
        <div className="imgContainer">
            <img src={data?.hdurl || "mars.png"} alt={data?.title || 'bgImage'} className="bgImage" />
        </div>
    )
}

export default Main