import React, {Component} from 'react'
import {Animated} from 'react-native'

class EnlargeShrink extends Component {
    constructor(props) {
        super(props)
        this.state = {
            viewSize: new Animated.Value(this._getSize())
        }
    }
    _getSize() {
        if(this.props.shouldEnLarge) {
            return 80
        } else {
            return 40
        }
            
    }
    componentDidUpdate() {
        Animated.spring(
            this.state.viewSize,
            {
                toValue: this._getSize(),
                useNativeDriver: false

            }
        ).start()
    }
    render() {
        return (
            <Animated.View style={{ width: this.state.viewSize, height: this.state.viewSize}}>
                {this.props.children}
            </Animated.View>
        )
    }
    
}

export default EnlargeShrink