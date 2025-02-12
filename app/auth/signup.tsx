import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import ButtonPrimary from '@/components/ui/ButtonPrimary'
import ButtonSosmed from '@/components/ui/ButtonSosmed'
import { useRouter } from 'expo-router'

const signin = () => {

  const navigation = useRouter();
  return (
    <SafeAreaView>
      <View style={tw`p-4 mx-5`}>
        <Text style={tw`text-2xl font-bold mb-2 text-center`}>Sign Up to Vidio for free!</Text>
        <Text style={tw`text-gray-600 mb-6 text-center`}>Get content recommendations and download your favorite videos to watch everytime</Text>

        <View style={tw`space-y-4 w-full gap-4`}>
          <TextInput
            placeholder='Email'
            style={tw`border border-gray-300 rounded-lg p-3 w-full`}
            placeholderTextColor="#666"
          />
          <TextInput
            placeholder='Password'
            secureTextEntry
            style={tw`border border-gray-300 rounded-lg p-3 w-full`}
            placeholderTextColor="#666"
          />
          <TouchableOpacity>
            <Text style={tw`text-right text-gray-500`}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={tw`my-6`}>
          <ButtonPrimary title='Sign Up' warnaBtn='[#ED205f]' warnaTxt='white' rute={() => { }} />
        </View>

        <Text style={tw`text-center text-gray-500 mb-4`}>- Or sign in with -</Text>

        <View style={tw`flex flex-row justify-center gap-6`}>
          <ButtonSosmed icon='logo-google' />
          <ButtonSosmed icon='logo-facebook' />
          <ButtonSosmed icon='logo-whatsapp' />
        </View>

        <View style={tw`flex justify-center mt-4`}>
          <Text style={tw`text-center text-sm text-gray-500`}>Don't have a Video account? <Text style={tw`text-blue-500`} onPress={() => navigation.push('/auth/signin')}>Sign In</Text></Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default signin