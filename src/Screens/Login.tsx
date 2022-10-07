import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';
import Logo from '../Components/Logo';
import {Link} from "react-router-native";

type Props = {}

const Login = (props: Props) => {
    const [error, setError] = useState({
        email: {error: false, message: ""},
        password: {error: false, message: ""}
    })
    const onLoginPressed = () => {
    };
    const onSignUpPressed = () => {
    }

  return (
    <View style={styles.container}>
        {/* Top Half of Login Page */}
        <View style={styles.topHalf}>
            {/* Logo */}
            <Logo/>
        </View>

        {/* BottomHalf of Login Page */}
        <View style={styles.bottomHalf}>
            {/* Username / Email Input */}
            <TextInput style={[styles.textInput, styles.title,error.email.error && styles.textInputError]} placeholder="Email Address" placeholderTextColor={styles.title.color} keyboardType='email-address' keyboardAppearance='dark'/>
            
            {/* Password Input */}
            <TextInput style={[styles.textInput, styles.title, error.password.error && styles.textInputError]} placeholder="Password" placeholderTextColor={styles.title.color} keyboardType='visible-password' keyboardAppearance='dark' secureTextEntry={true} />
            
            {/* Forgot Password */}
            <Text style={styles.forgotPassword}>Forgot Password ?</Text>

            {/* SignUp Button */}
            <Link to="/Home" style={[styles.button, (error.email.error || error.password.error) && styles.buttonError]} onPress={onSignUpPressed} disabled={error.email.error || error.password.error}>
                <Text style={styles.buttonText}>SignUp</Text>   
            </Link> 

            {/* Login Button */}
            <Link to="/Home" style={[styles.button, (error.email.error || error.password.error) && styles.buttonError]} onPress={onLoginPressed} disabled={error.email.error || error.password.error}>
                <Text style={styles.buttonText}>Login</Text>   
            </Link>   
            <View style={styles.alternateLoginButtonContainer}>
            </View>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
      },
      topHalf: {
        marginTop: 40,
        flex: .2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      bottomHalf: {
        flex: .6,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20,
      },

      title: {
        fontStyle: 'italic',
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: '400',
      },

      button: {
        flex: .5,
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonError: {
        backgroundColor: 'grey',
      },
      buttonText: {
        color: '#FFC700',
        fontStyle: 'italic',
        fontSize: 30,
        fontWeight: '400',
      },
      textInput: {
        flex: .5,
        width: '100%',
        marginTop: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: 10,
      },
      textInputError: {
        borderColor: 'red',
      },
      forgotPassword: {
        color: '#FFFFFF',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'right',
        textAlignVertical: 'center',
      },
      alternateLoginButtonContainer: {
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
      },
      link: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }
})