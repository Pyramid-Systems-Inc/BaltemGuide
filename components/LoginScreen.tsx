import {View, StyleSheet, Image, Text, TouchableOpacity} from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import {useWarmUpBrowser} from "@/hooks/useWarmUpBrowser";
import { useOAuth} from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession()
export default function LoginScreen() {
    useWarmUpBrowser();

    const {startOAuthFlow} = useOAuth({strategy: 'oauth_google'});
    const onPress = React.useCallback(async () => {
        try {
            const {
                createdSessionId,
                signIn,
                signUp,
                setActive} = await startOAuthFlow();

            if (createdSessionId && setActive) {
                await setActive({session: createdSessionId});
            }
            else{
                //
            }
        } catch (e) {
            console.error('OauthError',e);
        }
    },
        []
    );

    return (
        <View>
            <View style={styles.ViewImageStyle}>
            <Image
                source={require('../assets/images/Login.jpg')}
                style={styles.LoginImageStyle}
            />
            </View>
            <View style={styles.TextBelowImageStyle}>
                <Text style={styles.TextImageStyle}>دليلك الذكي لاستكشاف الخدمات بسهولة وسرعة</Text>
                <TouchableOpacity style={styles.loginButtonStyle} onPress={onPress}>
                    <Text style={styles.loginButtonTextStyle}>أنشئ حسابًا</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButtonStyle}>
                    <Text style={styles.loginButtonTextStyle}>تسجيل الدخول</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    ViewImageStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 90,

    },
    LoginImageStyle: {
        width: 400,
        height: 550,
        borderRadius: 35,
        borderWidth: 2,
        borderColor: '#000',

    },
    TextBelowImageStyle: {
        backgroundColor: '#fff',
        padding: 20,
        marginTop: -30,
        borderTopWidth: 2,
    },
    TextImageStyle: {
        color: '#213fb5',
        fontFamily: 'Al-B',
        fontSize: 20,
        textAlign: 'center',
    },
    loginButtonStyle: {
        backgroundColor: '#07c8bb',
        padding: 16,
        borderRadius: 25,
        marginTop: 15,
        textAlign: 'center',
    },
    loginButtonTextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Al-B',
    }

});