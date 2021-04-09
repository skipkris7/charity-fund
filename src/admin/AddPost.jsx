import React from 'react';
import SunEditor from "suneditor-react";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

export class AddPost extends React.Component{
    constructor(props) {
        super(props);
        this.sunEditorRef = React.createRef();
        this.state = {
            title: "",
            text: "",
            author: ""
        }
        this.handlerInput = this.handlerInput.bind(this);
        this.handlerSubmit= this.handlerSubmit.bind(this);
    }
    componentDidMount() {
        this.props("Добавление информации по животному в базу(ы)"); // Исправить заголовок может потребоваться 2 базы (кошки и собаки)

        console.log(this.sunEditorRef)
    }
    handlerInput(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    handlerSubmit(event){
        event.preventDefault();
        const formData = new FormData(); // Добавить фото и/или файл для отправки
        formData.append("title",this.state.title);
        formData.append("text",this.state.text);
        formData.append("author",this.state.author); // прописать пути к файлу AddPost.php
        fetch("http://?/php/addPost.php",{
            method: "POST",
            body: formData
        }).then(response=>response.json())
            .then(result=>console.log(result));
    }
    render() {
        return(
            <div className="container">
                <div className="col-sm-9 mx-auto">
                    <form onSubmit={this.handlerSubmit}> // Поменять форму для соответствия с общим концептом сайта
                        <div className="mb-3">
                            <input value={this.state.title} onChange={this.handlerInput} name="title" type="text" placeholder="Заголовок" className="form-control"/>
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
                                placeholder="Текст статьи"
                                height="400px"/> // сделать адаптацию на окно ввода высоты текста
                        </div>
                        <div className="mb-3">
                            <input value={this.state.author} onChange={this.handlerInput} name="author" type="text" placeholder="Автор" className="form-control"/>
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