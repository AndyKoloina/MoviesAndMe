import React , {Component} from 'react'
import {Animated, Dimensions,Easing} from 'react-native'

class FadeIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            positionLeft: new Animated.Value(Dimensions.get('window').width)
        }
    }
    componentDidMount() {
        Animated.spring(
            this.state.positionLeft,
            {
                toValue: 0,
                useNativeDriver: false,
                easing: Easing.elastic(2)
            }
        ).start()
    }
    render() {
        return(
            <Animated.View style={{ left: this.state.positionLeft}}>
                {this.props.children}
            </Animated.View>
        )
    }
}
export default FadeIn