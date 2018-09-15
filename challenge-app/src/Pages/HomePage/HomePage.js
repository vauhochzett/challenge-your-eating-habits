import React, {Component} from "react";
import MyChallengeComponent from './MyChallengeComponent/MyChallengeComponent'

class Homepage extends Component {
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
                    title: 'No Meat 4 Weeks',
                    author: 'FL',
                    date: new Date('December 17, 1995 03:24:00'),
                    description: 'Hey Valentin! Try not to eat any meat for 4 weeks. Bet you\'ll fail haha'
                }
            ]

        return <div className="HomePage">
            {
                objectlist.map( challenge => (
                    <MyChallengeComponent/>
                    )
                )
            }

        </div>
    }
}

export default Homepage