import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import { useState } from 'react'

export default function Login() {
    const [username, onChangeUserName] = useState('')
    const [password, onChangePassword] = useState('')

    const onSubmit = () => {
        console.log(`username: ${username}`, `password: ${password}`)
    }

    return (
    <View style={styles.layout}>
        <Text style={styles.title}>Login</Text>

        <TextInput 
            style={styles.input}
            value={username}
            onChangeText={onChangeUserName}
            placeholder="Username"
        />
      
        <TextInput
            style={styles.input}
            value={password}
            onChangeText={onChangePassword}
            placeholder="Password"
            secureTextEntry 
        />

        <Button
            onPress={onSubmit}
            title="Submit"
            color="#841584"
        />
    </View>
  )
}

const styles = StyleSheet.create({
    layout: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 6,
        borderStyle: 'solid',
        borderWidth: 1
    },
    title: {
        textAlign: 'center',
        fontSize: 20
    },
    input: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 6
    },
    button: {
        margin: 5
    }
});