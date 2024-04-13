import React from 'react'
import { GluestackUIProvider, ImageBackground, View, Text, ScrollView, Box, VStack, Center, Input, InputField, Button, ButtonText , Textarea, TextareaInput } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'

export default function EditPage({ navigation }) {
    return (
        <GluestackUIProvider config={config}>
            <ImageBackground
                source={require('../img/bg.png')}
                style={{ flex: 1 }}>
                <View marginTop={30}>
                    <Text m='$4' size='4xl' fontWeight='$bold'>Add Here</Text>
                </View>

                <View p="$6" marginTop={30}>
                    <Box marginTop={0}>
                        <VStack>
                            <View>
                                <Text size='xl' fontWeight='$bold'>Title</Text>
                                <Input variant="underlined" size="xl" isDisabled={false} isInvalid={false} isReadOnly={false} >
                                    <InputField
                                        placeholder='Enter Title here'
                                    />
                                </Input>
                            </View>
                            <View marginTop={20}>
                                <Text size='xl' fontWeight='$bold'>Note</Text>
                                <Textarea size="xl" isReadOnly={false} isInvalid={false} isDisabled={false} w='$100'>
                                    <TextareaInput
                                        placeholder="Your text goes here..."
                                    />
                                </Textarea>
                            </View>
                            <View marginTop={40}>
                                <Button size="xl" variant="outline" action="primary" isFocusVisible={true} marginLeft={10} marginRight={10} onPress={() => navigation.navigate("ViewNotePage")}>
                                    <ButtonText size='xl'>Create Note</ButtonText>
                                </Button>
                            </View>
                        </VStack>
                    </Box>
                </View>
            </ImageBackground>
        </GluestackUIProvider>
    )
}