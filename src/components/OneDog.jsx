import React from 'react';



export class OneDog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            text: '',
            id: '',
            photo1:'',
            photo2:'',
            photo3:'',
        }
    }

    componentDidMount() {
        console.log("Компонет Post отрисован");
        const formData = new FormData();
        formData.append('id',window.location.pathname.split('/')[2]);
        fetch("http://v90355zw.beget.tech/php12/getDog.php", {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                this.setState({
                    id:result.id,
                    nickname: result.nickname,
                    text: result.text,
                    photo1: result.photo1,
                    photo2: result.photo2,
                    photo3: result.photo3,
                    photo4: result.photo4
                });
            })
    }

    render() {
        return (<div className="container-fluid" style={{backgroundImage:"url(https://image.freepik.com/free-vector/cute-paw-footprint-seamless-pattern-background_42349-767.jpg)"}}>
                <div className="container" style={{height:100}}></div>
                <div className="container-fluid my-5" style={{textAlign:"center",fontSize:"xx-large",fontFamily:"cursive",color:"black",textDecoration:"underline"}}>
                    {this.state.nickname}
                </div>
                <div className="container text-center shadow-sm p-3 mb-5 bg-white rounded lh-lg">
                    <p style={{fontSize:20, color: "#3c3c3c", lineHeight: 2, fontFamily: "cursive"}}>
                        {this.state.text}
                    </p>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 my-5">
                            <img src={this.state.photo2} style={{width:400,height:400}} alt="" className="img-fluid"/>

                        </div>
                        <div className="col-lg-6 col-md-6 my-5">
                                <img src={this.state.photo3}  style={{width:300,height:400}} alt="" className="img-fluid"/>
                        </div>
                     </div>
                </div>
             </div>

        )
    }
}