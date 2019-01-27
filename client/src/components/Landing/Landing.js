import React, {Component} from 'react';

import Intro from './Intro';
import FeaturedProject from './FeaturedProject';
import OtherProjects1 from './OtherProjects1';
import OtherProjects2 from './OtherProjects2';

class Landing extends Component {
    render() {
        return(
            <div>
                <Intro />
                <FeaturedProject />
                <OtherProjects1 />
                <OtherProjects2 />
            </div>
        );
    }
}

export default Landing;