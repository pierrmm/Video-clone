import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const ButtonPrimary = ({ title, warnaBtn, warnaTxt, rute }: { title: string, warnaBtn: string, warnaTxt: string, rute: () => void }) => {
    return (
        <TouchableOpacity style={tw`bg-${warnaBtn} p-4 rounded-md`} onPress={rute}>
            <Text style={tw`text-${warnaTxt} font-bold text-center`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonPrimary