import React from 'react';

export class OneCat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
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
        const formData = new FormData();
        formData.append('id', 1);
        {/*formData.append('id', this.state.id);*/}
        fetch("http://creatingws.beget.tech/php/getCat.php", {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {

                this.setState({
                    id: result.id,
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
            <section className="cat-list-area section-gap" style={{backgroundImage:"url(https://image.freepik.com/free-vector/cute-paw-footprint-seamless-pattern-background_42349-767.jpg)"}}>>
                <div className="text-center">
                        <h1 style={{fontFamily:"Georgia", color: "#8c0494" }}>
                           <b>{this.state.nickname}</b><br/>
                        </h1>
                        <p style={{fontSize:14, color: "#8c0494", fontFamily: "Georgia", fontStyle: "italic"}}>
                            {this.state.text}
                        </p>
                </div>

                {/*показ фото*/}
                <div className="container">
                         <div className="single-cat-list" >
                             <img src={this.state.photo_1} style={{width:262,height:340}}/>
                             <br/>
                             <img src={this.state.photo_2} style={{width:262,height:340}}/>
                             <br/>
                             <img src={this.state.photo_3} style={{width:262,height:340}}/>
                             <br/>
                             <img src={this.state.photo_4} style={{width:262,height:340}}/>
                             <br/>
                             <img src={this.state.photo_5} style={{width:262,height:340}}/>
                         </div>
                </div>

            </section>
        )
    }
}