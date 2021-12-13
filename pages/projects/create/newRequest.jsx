import React from "react";
import MNavBar from "../../../ui_components/MNavBar";
import MFormRequest from "../../../ui_components/MFormRequest"
class NewRequest extends React.Component{
    static async getInitialProps(props) {
        const address = props.query.address;

        return {address};
    }

    render(){
        return(
            <div className="wrapper">
                <MNavBar />
                <h2 className="h2-common">Create a new Request</h2>
                <MFormRequest fundAddress={this.props.address}/>
            </div>
        );

    }
}

export default NewRequest;