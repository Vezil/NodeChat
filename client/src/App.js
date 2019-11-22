import React, {Component} from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route, withRouter } from "react-router-dom";

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

import "./pageTransitions/slideTransition.scss";

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        prevDepth: this.getPathDepth(this.props.location)
      };
    }


componentWillReceiveProps() {
    this.setState({ prevDepth: this.getPathDepth(this.props.location)});
}


getPathDepth(location) {

    let pathArr = location.pathname.split("/");
    pathArr = pathArr.filter(n => n !== "");
    return pathArr.length;
}



render ()  {
    const { location } = this.props;
    const currentKey = location.pathname.split("/")[1] || "/";
    const timeout = { enter:800, exit: 400 };

    return(
    <TransitionGroup component="div" className="App">
        <CSSTransition key={ currentKey } timeout={ timeout } classNames="pageSlider" mountOnEnter={false} unmountOnExit={true}>
            <div className={this.getPathDepth(location) - this.state.prevDepth >= 0 ? "left" : "right"}>
                <Switch location = { location }>
                    <Route path="/" exact component ={ Join } />
                    <Route path="/chat" exact component ={ Chat } />
                </Switch>
            </div>
        </CSSTransition>
    </TransitionGroup>
    );
  }
}

export default withRouter(App);
