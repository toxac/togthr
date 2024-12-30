import { useFormik } from 'formik';
import React from 'react';
import { View, Text, TextInput, ActivityIndicator, Alert } from 'react-native';
import * as Yup from 'yup';

import Button from '../Button';



const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

export default function LoginForm() {
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isSubmitting,
    } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            Alert.alert(values.email, values.password);

        },
    });

    return (
        <View className="w-full p-10 gap-6">
            <View>
                <TextInput
                    placeholder="Email"
                    className="w-full bg-white rounded-lg border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                {touched.email && errors.email && (
                    <Text style={{ color: 'red' }}>{errors.email}</Text>
                )}
            </View>

            <View>
                <TextInput
                    className="w-full bg-white rounded-lg border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                    placeholder="Password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    secureTextEntry
                />
                {touched.password && errors.password && (
                    <Text style={{ color: 'red' }}>{errors.password}</Text>
                )}
            </View>

            <Button
                onPress={() => handleSubmit()}
                textColor='text-white'
                bgColor='bg-cyan-600'
            >
                Login
            </Button>
        </View>
    );
}