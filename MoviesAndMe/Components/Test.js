import React , {Component} from 'react'
import {Platform, StyleSheet,View,Animated,Easing,Dimensions} from 'react-native'
import HelloWorld from './HelloWorld' 
class TestComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topPosition: new Animated.Value(0),
            leftPosition: new Animated.Value(0)
        }

        var {height, width} = Dimensions.get('window');
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {
                let touches = evt.nativeEvent.touches;
                if (touches.length == 1) {
                    this.setState({
                    topPosition: touches[0].pageY - height/2,
                    leftPosition: touches[0].pageX - width/2
                    })
                }
            }
        })
    }
    render() {
        return (
            <View style={styles.main_container}>
                <Animated.View style={[styles.animation_view,{top: this.state.topPosition,left: this.state.leftPosition}]}>
                </Animated.View>
          {/*<HelloWorld />*/}
            </View>
        )
    }
    componentDidMount() {
        /*Animated.timing (
            this.state.topPosition,
            {
                toValue: 50,
                duration: 2000,
                useNativeDriver: false,
                easing: Easing.linear
            }
        ).start()*/
        /*Animated.spring(
            this.state.topPosition,
            {
              toValue: 100,
              speed: 4,
              useNativeDriver: false,
              bounciness: 30
            }
          ).start();*/
         /* Animated.decay(
            this.state.topPosition,
            {
              velocity: 0.8,
              useNativeDriver: false,
              deceleration: 0.997,
            }
          ).start();*/
          /*Animated.sequence([
            Animated.spring(
              this.state.topPosition,
              {
                toValue: 100,
                tension: 8,
                useNativeDriver: false,
                friction: 3
              }
            ),
            Animated.timing(
              this.state.topPosition,
              {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false,
                easing: Easing.elastic(2)
              }
            )
          ]).start()*/
          Animated.parallel([
              Animated.spring(
                  this.state.topPosition,
                  {
                      toValue: 100,
                      duration: 1000,
                      useNativeDriver: false,
                      easing: Easing.back,

                  }
              ),
              Animated.timing(
                  this.state.leftPosition,
                  {
                      toValue: 100,
                      duration: 1000,
                      useNativeDriver: false,
                      easing: Easing.elastic(2)
                  }
              )

          ]).start()
    }
}
const styles= StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subview_container: {
        backgroundColor: Platform.OS === 'ios' ? 'red' : 'blue',
        height: Platform.OS === 'ios' ? 100 : 50,
        width: Platform.OS === 'ios' ? 50 : 100
    },
    animation_view: {
        backgroundColor: 'red',
        width: 100,
        height: 100
      }
})

export default TestComponent