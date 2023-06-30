import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false })
    }, [])
    return (
        <SafeAreaView className='mt-7 flex-1 relative'>
            {/* first section */}
            <View className='flex-row items-center px-6 mt-8 space-x-2'>
                <View className='h-16 w-16 rounded-full bg-black flex justify-center items-center'>
                    <Text className='text-[#00BCC9] text-3xl font-semibold'>Go</Text>
                </View>
                <Text className='text-[#2A2B4B] text-3xl font-semibold'>Travel</Text>
            </View>
            {/* second section */}
            <View className='px-6 mt-8 space-y-3'>
                <Text className='text-[#3C6072] text-[42px]'>Enjoy the trip with</Text>
                <Text className='text-[#00BCC9] text-[38px]'>Good Moments</Text>
                <Text className='text-[#3C6072] text-base'>Lorem Ipsum is simply dummy text of
                    the print and typesetting industry.
                </Text>
            </View>
            {/* Circle section */}
            <View className='w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-20
             -right-48'>
            </View>
            <View className='w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28
             -left-48'>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen