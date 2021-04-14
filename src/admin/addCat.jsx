import React from "react";

export class AddCat extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            nickname: "",
            text: "",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(e){
        const name = e.target.name;
        const value =e.target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('cat',this.state.nickname);
        formData.append('cat',this.state.text);
        fetch('http://psnov555_fond/addCat',{
            method: "POST",
            body: formData
        })
            .then(response=>response.json())
            .then(result=>{
                if(result.result === "success"){
                    alert("Кошка добавлена");
                }
            })
    }
    render() {
        return (
            <div className="container">
                <div className="col-sm-6 mx-auto">
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <input value={this.state.nickname} onChange={this.handleInputChange} name="nickname" type="text" className="form-control" placeholder="Введите кличку"/>
                        </div>
                        <div className="mb-3">
                            <input value={this.state.text} onChange={this.handleInputChange} name="text" type="text" className="form-control" placeholder="Добавьте описание"/>
                        </div>
                        <div className="mb-3 text-center">
                            <input type="submit" className="btn btn-primary"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}