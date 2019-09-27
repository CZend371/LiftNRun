export class BodyInput extends Component(props) {
    handleInputChange = event => {
        var { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="Input">
                <div name={prop.name} class="Bodybtn" onclick={this.DecreaseBtn}></div>
                <input {...props} />
                <div name={prop.name} class="Bodybtn" onclick={this.IncreaseBtn}></div>
            </div>
        )
    }
}