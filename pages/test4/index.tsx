import React from "react"

class Test4 extends React.Component {
    componentDidMount() {
        console.log("Test1", this.props)
    }
    render() {
        return (
            <div >
                Test4
            </div>
        )
    }
}
export default Test4