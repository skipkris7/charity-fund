import React from "react";
import SunEditor from "suneditor-react";
import 'suneditor/dist/css/suneditor.min.css';

export class AddCat extends React.Component{
    constructor(props) {
        super(props);
        this.sunEditorRef = React.createRef();
        this.state = {
            nickname: "",
            text: "",
        }
        this.handlerInputChange = this.handlerInputChange.bind(this);
        this.handlerSubmit= this.handlerSubmit.bind(this);
    }
    componentDidMount() {

    }
    handlerInputChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    handlerSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('nickname',this.state.nickname);
        formData.append('text',this.state.text);
        fetch('http://psnov555.beget.tech/addCat',{
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
        return(
            <div className="container">
                <div className="col-sm-9 mx-auto">
                    <form onSubmit={this.handlerSubmit}>
                        <div className="mb-3">
                            <input value={this.state.nickname} onChange={this.handlerInputChange} name="nickname" type="text" placeholder="Кличка" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <SunEditor
                                ref={this.sunEditorRef}
                                name="text"
                                onChange={(value)=>{
                                    const name = (this.sunEditorRef.current.props.name);
                                    this.setState({
                                        [name]: value
                                    })
                                }}
                                placeholder="Добавьте текст"
                                height="400px"/>
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