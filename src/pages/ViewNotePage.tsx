import React from 'react';
import { AddIcon, Box, Center, Fab, FabIcon, FabLabel, GluestackUIProvider, ImageBackground, Text, VStack, View, ScrollView, Link } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import Viewer from '../components/Viewer';

export default function ViewNotePage({ navigation }) {
    return (
        <GluestackUIProvider config={config}>
            <ImageBackground
                source={require('../img/bg.png')}
                style={{ flex: 1, justifyContent: "center" }}>
                <View>
                    <Link onPress={() => navigation.navigate("MyAccount")} size='md'>
                        {/* <LinkText>Don't have account</LinkText> */}
                        <Text m='$4' size='4xl' fontWeight='$bold'>Hi User</Text>
                    </Link>
                </View>
                <ScrollView flex={1} h={100} p="$6">
                    <Box marginTop={0}>
                        <VStack>
                            <View>
                                <Viewer />
                            </View>
                            <View>
                                <Viewer />
                            </View>
                            <View>
                                <Viewer />
                            </View>
                            <View>
                                <Viewer />
                            </View>
                            <View>
                                <Viewer />
                            </View>
                            <View>
                                <Viewer />
                            </View>
                            <View>
                                <Viewer />
                            </View>
                            <View>
                                <Viewer />
                            </View>
                            <View>
                                <Viewer />
                            </View>
                            <View>
                                <Viewer />
                            </View>
                            <View>
                                <Viewer />
                            </View>
                        </VStack>
                    </Box>
                </ScrollView>
            </ImageBackground>

            <View>
                <Fab size="lg" placement="bottom right" isHovered={true} isDisabled={false} isPressed={false} onPress={() => navigation.navigate("EditPage")}>
                    <FabIcon as={AddIcon} marginLeft={5} />
                    <FabLabel marginRight={5}>New</FabLabel>
                </Fab>
            </View>
            {/* <Loader /> */}
        </GluestackUIProvider>
    );
}