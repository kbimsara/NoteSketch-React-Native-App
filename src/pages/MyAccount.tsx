import { config } from '@gluestack-ui/config'
import { GluestackUIProvider, ImageBackground, View, Image, Center, Text, Input, InputField, Button, ButtonText } from '@gluestack-ui/themed'
import React from 'react'

export default function MyAccount({ navigation }) {
    return (
        <GluestackUIProvider config={config}>
            <ImageBackground
                source={require('../img/bg.png')}
                style={{ flex: 1, justifyContent: "center" }}>
                <Center>
                    <Image size="xl" borderRadius="$full" source={require('../img/user.png')} />
                </Center>

                <View p='$3'>
                    <View marginTop={60}>
                        <Text size='xl' fontWeight='$bold'>Name</Text>
                        <Input variant="underlined" size="xl" isDisabled={false} isInvalid={false} isReadOnly={false} >
                            <InputField type="text" placeholder='Enter Password here' />
                        </Input>
                    </View>
                    <View marginTop={20}>
                        <Text size='xl' fontWeight='$bold'>Email</Text>
                        <Input variant="underlined" size="xl" isDisabled={true} isInvalid={false} isReadOnly={true} >
                            <InputField
                                placeholder='Enter Email here'
                            />
                        </Input>
                    </View>
                    <View marginTop={20}>
                        <Text size='xl' fontWeight='$bold'>Password</Text>
                        <Input variant="underlined" size="xl" isDisabled={false} isInvalid={false} isReadOnly={false} >
                            <InputField type="password" placeholder='Enter Password here' />
                        </Input>
                    </View>
                    <View marginTop={40}>
                        <Button size="xl" variant="outline" action="primary" isFocusVisible={true} marginLeft={10} marginRight={10} onPress={() => navigation.navigate("ViewNotePage")}>
                            <ButtonText size='xl'>Update</ButtonText>
                        </Button>
                    </View>
                    <View marginTop={10}>
                        <Button size="xl" variant="outline" action="primary" isFocusVisible={true} marginLeft={10} marginRight={10} onPress={() => navigation.navigate("LoginPage")}>
                            <ButtonText size='xl'>Logout</ButtonText>
                        </Button>
                    </View>

                </View>
            </ImageBackground>
        </GluestackUIProvider>
    )
}