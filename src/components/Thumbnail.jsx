
import "../Style/Thumbnail.css"

export default function MusicThumbnail({ thumbnail, className = "", createDot = false }) {
    const containerStyle = {
        position: 'relative',
        backgroundImage: `url(${thumbnail})`,
    };
    const spanStyle = {
        content: `url(${thumbnail})`,
    };
    const commonStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="thumbnail-container">
            <div style={{ position: 'relative' }}>
                <div className={"thumbnail circle " + className} style={{ ...containerStyle, ...commonStyle }}></div>
                <span style={{ ...spanStyle, ...commonStyle }} className={"thumbnail-shadow circle " + className}></span>
                {createDot ? <Dot /> : ""}
            </div>
        </div>
    )
}

export function SquareThumbnail({ thumbnail, className = "" }) {
    const containerStyle = {
        position: 'relative',
        backgroundImage: `url(${thumbnail})`,
    };
    // const spanStyle = {
    //     content: `url(${thumbnail})`,
    // };
    const commonStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="thumbnail-container">
            <div style={{ position: 'relative' }}>
                <div className={"thumbnail square " + className} style={{ ...containerStyle, ...commonStyle }} ></div>
                {/* <span style={{ ...spanStyle, ...commonStyle }} className={"thumbnail-shadow square " + className}></span> */}
            </div>
        </div>
    )
}

function Dot() {
    return (
        <div className="thumbnail-dot"></div>
    )
}