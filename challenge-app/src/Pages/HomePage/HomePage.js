import React, {Component} from "react";
import PublicChallengeComponent from './PublicChallengeComponent/PublicChallengeComponent'
import MyChallengeComponent from './MyChallengeComponent/MyChallengeComponent'
import BottomNavComponent from './BottomNavComponent'

class Homepage extends Component {

    state = {
        privateView: true
    }

    toggleView = (privateView) => {
        this.setState(
            {
                privateView: privateView
            }
        )
    }

    render() {

        const objectlist =
            [
                {
                    title: 'No Meat 4 Weeks',
                    author: 'FL',
                    date: new Date('December 17, 1995 03:24:00'),
                    description: 'Hey Valentin! Try not to eat any meat for 4 weeks. Bet you\'ll fail haha'
                },
                {
                    title: 'No Plastic Challenge',
                    author: 'KO',
                    date: new Date('December 17, 1995 03:24:00'),
                    description: 'Yo Valentin! I tried not to use any plastic for one whole day. Tougher than you would think!'
                }
            ]

        const myChallengeList = objectlist.map( challenge => (
                <MyChallengeComponent challenge={challenge}/>
            )
        )

        const publicChallengeList = <PublicChallengeComponent/>

        return <div className="HomePage">

            {
                this.state.privateView ? myChallengeList : publicChallengeList
            }
            <BottomNavComponent toggleView={this.toggleView}></BottomNavComponent>
        </div>
    }
}

export default Homepage