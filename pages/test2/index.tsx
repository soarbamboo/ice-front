import React from "react"

class Test2 extends React.Component {
    componentDidMount() {
        console.log("Test1", this.props)
    }
    render() {
        return (
            <div >
                Test2
            </div>
        )
    }
}
export default Test2