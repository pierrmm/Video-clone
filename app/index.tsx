import { View, Text, Image } from 'react-native'
import React from 'react'
import ButtonPrimary from '@/components/ui/ButtonPrimary'
import tw from 'twrnc'
import { useRouter } from 'expo-router';


const index = () => {

    const navigation = useRouter();

    return (
        <View style={tw`flex-1 items-center justify-center px-5`}>
            <View style={tw` h-2/3`}>
                <Image source={require('../assets/images/nonton.png')} style={tw`w-96 h-80`} />
                <Text style={tw`text-2xl font-bold text-center px-2`}>TV Channels, Soap Operas, Sport & K-Drama, we have it all</Text>
                <Text style={tw`text-center mt-2`}>Pick anything you like from 40+ TV channels and hundreds of thousands of free content to watch in your free time.</Text>
            </View>
            <View style={tw`mt-5 gap-3 w-full`}>
                <ButtonPrimary title='Sign In' warnaBtn='[#ED205f]' warnaTxt='white' rute={() => navigation.push('/auth/signin')} />
                <ButtonPrimary title='Find Content' warnaBtn='' warnaTxt='black' />
            </View>
        </View>)
}

export default index