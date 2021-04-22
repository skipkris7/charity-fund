import React from 'react';

export class OneCat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            text: '',
            photo_1: '',
            photo_2: '',
            photo_3: '',
            photo_4: '',
            photo_5: ''
        }
    }
    componentDidMount() {
        console.log("Компонет OneCat отрисован");
        const formData = new FormData();
        formData.append("id", this.props.match.params.id);
        fetch("http://creatingws.beget.tech/php/getCat.php", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({
                    nickname: result.nickname,
                    text: result.text,
                    photo_1: result.photo_1,
                    photo_2: result.photo_2,
                    photo_3: result.photo_3,
                    photo_4: result.photo_4,
                    photo_5: result.photo_5
                });
            })
    }
    render() {
        return (
            <div className="cat-list-area section-gap " style={{backgroundImage:"url(https://thumbs.dreamstime.com/b/pets-seamless-pattern-23238387.jpg)"}}>
                <h2 class="text-center" style={{color:"#8c0494",fontFamily:"Georgia"}}><p> {this.state.nickname}</p><br/></h2>
                <div className="container text-center shadow-sm bg-white rounded lh-lg">
                    <div style={{fontSize:20, color: "#3c3c3c", lineHeight: 1.8, fontFamily: "Georgia"}}>dangerouslySetInnerHTML={this.state.text}</div>
                </div>
                <div className="col-md-12 text-center">
                    <img src={"http://creatingws.beget.tech/php/getCat.php/"+this.state.photo_1} alt="cat" className="img-fluid img-thumbnail rounded" />
                    <img src={"http://creatingws.beget.tech/php/getCat.php/"+this.state.photo_2} alt="cat" className="img-fluid img-thumbnail rounded" />
                    <img src={"http://creatingws.beget.tech/php/getCat.php/"+this.state.photo_3} alt="cat" className="img-fluid img-thumbnail rounded" />
                    <img src={"http://creatingws.beget.tech/php/getCat.php/"+this.state.photo_4} alt="cat" className="img-fluid img-thumbnail rounded" />
                    <img src={"http://creatingws.beget.tech/php/getCat.php/"+this.state.photo_5} alt="cat" className="img-fluid img-thumbnail rounded" />
                </div>
            </div>

        )
    }
}