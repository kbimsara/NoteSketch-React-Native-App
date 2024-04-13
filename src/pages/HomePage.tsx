import React from 'react'
import { AddIcon, Box, Button, ButtonIcon, ButtonText, Center, GluestackUIProvider, Heading, Image, Input, InputField, Link, LinkText, ScrollView, Text, VStack, View, } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'

export default function HomePage({ navigation }) {
  return (
    <GluestackUIProvider config={config}>
      <View backgroundColor='$primary0' flex={1}>
        {/* <Text color='$amber500' fontSize="3em" fontWeight="bold">NoteSketch</Text> */}
        <Center>
          <Image size="2xl" alignContent='center' justifyContent='center' source={require('../img/note.png')} marginTop={50} />
        </Center>


        <ScrollView borderTopRightRadius={50} borderTopLeftRadius={50} backgroundColor='$yellow200' flex={1} h={100} p="$6">
          <Box marginTop={0}>
            <VStack>
              <Center>
                <Text size='4xl' marginBottom={30} fontWeight='$bold'>Join Us!</Text>
              </Center>
              <View>
                <Text size='xl' fontWeight='$bold'>Name</Text>
                <Input variant="underlined" size="xl" isDisabled={false} isInvalid={false} isReadOnly={false} >
                  <InputField
                    placeholder='Enter Name here'
                  />
                </Input>
              </View>
              <View marginTop={20}>
                <Text size='xl' fontWeight='$bold'>Email</Text>
                <Input variant="underlined" size="xl" isDisabled={false} isInvalid={false} isReadOnly={false} >
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
              <View marginTop={20}>
                <Text size='xl' fontWeight='$bold'>Re-Password</Text>
                <Input variant="underlined" size="xl" isDisabled={false} isInvalid={false} isReadOnly={false} >
                  <InputField type="password" placeholder='Enter Password here' />
                </Input>
              </View>
              <View marginTop={40}>
                <Button size="xl" variant="outline" action="primary" isFocusVisible={true} marginLeft={10} marginRight={10} onPress={() => navigation.navigate("ViewNotePage")}>
                  <ButtonText size='xl'>Create Account</ButtonText>
                </Button>
              </View>
              <View marginTop={20}>
                <Center>
                  <Link onPress={() => navigation.navigate("LoginPage")} size='md'>
                    <LinkText>Already Have Account</LinkText>
                  </Link>
                </Center>
              </View>
            </VStack>
          </Box>
        </ScrollView>


      </View>
    </GluestackUIProvider>
  );
}