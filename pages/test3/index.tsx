import React from "react"

class Test3 extends React.Component {
    componentDidMount() {
        console.log("Test1", this.props)
    }
    render() {
        return (
            <div >
                Test3
            </div>
        )
    }
}
export default Test3