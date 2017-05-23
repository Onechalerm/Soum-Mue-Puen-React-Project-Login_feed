import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Alert } from 'react-native';
import { Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    checkPass() {
        if ((this.state.username == 'Admin') && (this.state.password === '123456')) {
            Actions.contentfeed();
        } else {
            Alert.alert(
                'Username หรือ Password ไม่ถูกต้อง',
                'Username หรือ Password ลองใหม่อีกครั้ง',
                [
                    { text: 'ลองอีกครั้ง' }
                ],
                { cancelable: false }

            );
        }
    }
    render() {
        return (
            <Image source={require('../Images/Home.png')}
                style={[styles.loginBG, {
                  backgroundColor: 'transparent'
                }]}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0,0,0,0)',
                    padding: 20
                }}>
                    <Image source={require('../Images/Logo.png')} style={{
                        width: 150,
                        height: 170,
                        alignSelf:'center',
                        top: -50, 
                        marginBottom:20
                       // marginTop:20
                    }} />
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <View style={styles.viewHalf}>
                            <Text style={styles.strongLabel}> </Text>
                        </View>
                        <View style={styles.view2_3}>
                            <TextInput
                                placeholder="ชื่อผู้ใช้"
                                onChangeText={(username) => this.setState({ username })}
                                style={styles.loginInput}
                            />
                        </View>

                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 10
                    }}>
                        <View style={styles.viewHalf}>
                            <Text style={styles.strongLabel}></Text>
                        </View>
                        <View style={styles.view2_3}>
                            <TextInput
                                placeholder="รหัสผ่าน"
                                onChangeText={(password) => this.setState({ password })}
                                style={styles.loginInput}
                                secureTextEntry={true}
                            />
                        </View>

                    </View>

                    <View style={{
                        marginTop: 20
                    }}>
                        <Button block light style={{
                            alignSelf:'center',
                            width : 240,
                        }}
                            onPress={this.checkPass.bind(this)}
                        >
                            <Icon name="ios-contact" style={{
                                color:'#ff002a',
                            }} />
                            <Text style={{
                                color: '#ff002a',
                                fontWeight: 'bold',
                            }}>เข้าสู่ระบบ</Text>
                        </Button>
                    </View>
                </View>
            </Image>
        );
    }
}
const styles = StyleSheet.create({
    loginBG: {
        flex: 1,
        width: null,
        justifyContent: 'center',
        height: null
    },
    viewHalf: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginRight: -100
    },
    view2_3: {
        flex: 2,
        backgroundColor: 'transparent'
    },
    strongLabel: {
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 16
    },
    loginInput: {
        alignSelf:'center',
        height: 40,
        width: 240,
        padding: 10,
        marginRight:45,
        backgroundColor: 'white'
    }
});
export default Login;