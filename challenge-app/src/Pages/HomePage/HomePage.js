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
                date: new Date(2018,8,16),
                description: 'Remove meat from your diet to save big on CO2!'
            },
            {
                title: 'Eat an insect dish',
                img: 'grilled_crickets',
                author: 'KO',
                date: new Date(2018,8,15),
                description: 'Insects are super low-resource. Try to eat them in a regular dish once!'
            },
            {
                title: 'Try bolognese with lentil',
                img: 'lentil_bolognese',
                author: 'FL',
                date: new Date(2018,8,15),
                description: 'Maybe instead of eating meat, a bolognese with lentils would be a good taste?'
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