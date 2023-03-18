import React from "react"
import { ArtileProps } from "./types"

class Artile extends React.Component<ArtileProps>{
    static NEED_HEADER = false;

    render() {
        return (
            <div >
                文章内容{this.props.artileId}
            </div>
        )
    }
}
export default Artile