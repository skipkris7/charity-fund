import React from 'react';

export class OneCat extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
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
        {/* ИЛИ ТАК formData.append('id', window.location.pathname.split('/')[2]);*/}
        fetch("http://creatingws.beget.tech/php/getCat.php", {
            method: 'POST',
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
            <section className="cat-list-area section-gap text-center"
            style={{backgroundImage:"url(https://image.freepik.com/free-vector/cute-paw-footprint-seamless-pattern-background_42349-767.jpg)"}}>
                <h2 style={{color:"#8c0494",fontFamily:"Georgia"}}>
                {this.state.nickname}
                </h2>
            <br/>
                <div className="container shadow-sm p-3 mb-5 bg-white rounded lh-lg">
                     <p style={{fontSize:20, color: "#3c3c3c", lineHeight: 2, fontFamily: "Georgia"}}>
                         {this.state.text}
                     </p>
                </div>
                <br/>
                {/*отображаем фото кошек */}
                {/*(отображение в div)  <div className="container">
                    <div className="single-cat-list" >
                         <div className="row">
                             <img className="figure-img img-fluid img-thumbnail rounded" src={"http://creatingws.beget.tech/" + this.state.photo_1} alt="cat" style={{width:262,height:350}}/>
                             <br/>
                         </div>
                    </div>
                </div>*/}
                            <figure className="figure">
                                <img src={"http://creatingws.beget.tech/" + this.state.photo_1} alt="cat" className="figure-img img-fluid img-thumbnail rounded" style={{width:270,height:380}}/>
                            </figure>
                             <figure className="figure">
                                <img src={"http://creatingws.beget.tech/" + this.state.photo_2} alt="cat" className="figure-img img-fluid img-thumbnail rounded" style={{width:270,height:380}}/>
                             </figure>
                             <figure className="figure">
                                <img src={"http://creatingws.beget.tech/" + this.state.photo_3} alt="cat" className="figure-img img-fluid img-thumbnail rounded" style={{width:270,height:380}}/>
                             </figure>
                             <figure className="figure">
                                <img src={"http://creatingws.beget.tech/" + this.state.photo_4} alt="cat" className="figure-img img-fluid img-thumbnail rounded" style={{width:270,height:380}}/>
                             </figure>
                             <figure className="figure">
                                <img src={"http://creatingws.beget.tech/" + this.state.photo_5} alt="cat" className="figure-img img-fluid img-thumbnail rounded" style={{width:270,height:380}}/>
                             </figure>
            </section>
        )
    }
}