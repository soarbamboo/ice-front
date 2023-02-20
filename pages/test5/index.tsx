import React from "react"

class Test5 extends React.Component {
    componentDidMount() {
        console.log("Test5", this.props)
    }
    render() {
        return (
            <div >
                Test5
            </div>
        )
    }
}
export default Test5