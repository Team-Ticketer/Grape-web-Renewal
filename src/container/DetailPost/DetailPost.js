import React, { Component } from 'react';
import $ from "jquery";
import axios from 'axios';

import DetailInfo from 'components/DetailPost/DetailInfo';
import DetailContent from 'components/DetailPost/DetailContent';

import './DetailPost.scss'

class DetailPost extends Component {
    state = {
        concertTitle: 'GDG DevFest Seoul 2018 ',
        imgSrc: '/images/detail-img.jpg',
        place: 'Coex, Grand Balloon',
        startDate: '2019-10-23',
        endDate: '2019-10-26',
        artist: 'Artist',
        description: "올해도 신나는 개발자의 축제 Devfest가 돌아왔습니다! 개발 기술을 주제로 개발과 관련된 모든 구성원이 한자리에 모여 서로의 경험과 지식을 교환하고, 아이디어를 공유하고, 기술에 대한 열정을 표출할 수 있는 장인 DevFest에 여러분을 초대합니다. 이번 DevFest에서는 개발자들의 축제라는 컨셉에 맞게 다양한 기술 세션과 코드랩을 준비할 예정입니다. 올해 발표된 디지털 웰빙의 핵심 컨셉인 ‘기술의 발전이 모두의 삶을 발전하는데 도움이 된다’는 기조에 맞추어 더욱 신중하게 세션을 배치할 예정이며, 디지털 라이프와 현실 세계의 적절한 균형감을 느낄 수 있도록 모니터와 기기에서 떨어져 나와 나의 정신과 몸, 나의 건강을 챙길 수 있는 명상 세션도 준비했습니다. 기술 세션과 코드랩으로 세상을 발전시키는 많은 지식도 얻어가고, 축제를 즐기는 도중에 힘이 들면 명상으로 휴식을 취해보세요!",
        lat: 33.500315,
        lng: 126.530035,
        youtubeUri: '1e-xZ0JOLgY',
        ticketLists: [{ name: 'Class A Ticket', price: 20, amount: 5, transferable: true },{ name: 'Class B Ticket', ticketPrice: 15, amount: 25, transferable: true },{ name: 'Class C Ticket', price: 10, amount: 0, transferable: false }]
    }
    
    componentDidMount () {
        const {match} = this.props;
        var topBar = $("#detail__concert__buy__btn").offset();
 
        $(window).scroll(function(){
            
            var docScrollY = $(document).scrollTop()
            var barThis = $("#detail__buy__top__bar")
    
            if( docScrollY > topBar.top ) {
                barThis.removeClass("display--none");
            }else{
                barThis.addClass("display--none");
            }
    
        });

        axios.get(`http://grape-server.herokuapp.com/concert/${match.params.post}`)
        .then(data => {
            
        })
    }

    render() {
        return (
            <div className="detail__wrapper">
                <img src={this.state.imgSrc} alt="detail IMG" className="detail__background__img"/>
                <DetailInfo 
                    concertTitle={this.state.concertTitle}
                    place={this.state.place}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    artist={this.state.artist}
                />
                <DetailContent 
                    concertTitle={this.state.concertTitle}
                    description={this.state.description}
                    lat={this.state.lat}
                    lng={this.state.lng}
                    youtubeUri={this.state.youtubeUri}
                    ticketLists={this.state.ticketLists}/>
            </div>
        );
    }
}

export default DetailPost;