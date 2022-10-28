
function PlatformCard({platformInfo}) {
    
    return (
        <div className="PlatformCard">
            <h1>{platformInfo.title}</h1>
            <img src={platformInfo.image_url} alt={platformInfo.title} />
        </div>
    )
}

export default PlatformCard