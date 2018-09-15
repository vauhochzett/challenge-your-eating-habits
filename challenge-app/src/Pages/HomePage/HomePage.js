import React, { Component } from "react";
import PublicChallengeComponent from './PublicChallengeComponent/PublicChallengeComponent'
import MyChallengeComponent from './MyChallengeComponent/MyChallengeComponent'
import BottomNavComponent from './BottomNavComponent'
import ChallengedPopup from "./ChallengedPopup/ChallengedPopup";
import './HomePage.css'

class Homepage extends Component {

    state = {
        privateView: true,
        challenges: [
            {
                title: 'No Meat for a week',
                img: 'meat',
                author: 'FL',
                date: new Date( 'December 17, 1995 03:24:00' ),
                description: 'Hey Valentin! Try not to eat any meat for 4 weeks. Bet you\'ll fail haha'
            },
            {
                title: 'Eat an insect dish',
                img: 'grilled_crickets',
                author: 'KO',
                date: new Date( 'December 17, 1995 03:24:00' ),
                description: 'Yo Valentin! I tried not to use any plastic for one whole day. Tougher than you would think!'
            }
        ]
    };

    toggleView = ( privateView ) => {
        this.setState(
            {
                privateView: privateView
            }
        )
    };

    addChallenge = ( challenge ) => {
        const temp = this.state.challenges.slice();
        temp.unshift( challenge );
        this.setState( {
            challenges: temp
        } )
    };


    render() {

        const myChallengeList = this.state.challenges.map( challenge => (
                <div className="MyChallengeWrapper"><MyChallengeComponent challenge={challenge}/></div>
            )
        );

        const publicChallengeList = <PublicChallengeComponent/>;

        return <div className="HomePage">
            {
                this.props.match.params.id ? <ChallengedPopup addChallenge={this.addChallenge}/> : null
            }
            {
                this.state.privateView ? myChallengeList : publicChallengeList
            }
            <BottomNavComponent toggleView={this.toggleView}></BottomNavComponent>
        </div>
    }
}

export default Homepage