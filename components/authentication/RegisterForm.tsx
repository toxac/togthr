import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../Button'


const registerSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Password confirmation is required'),
});

export default function RegisterForm() {
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
            passwordConfirmation: '',
        },
        validationSchema: registerSchema,
        onSubmit: (values) => {

        },
    });

    return (
        <View className="w-full p-10 gap-6">
            <View>
                <TextInput
                    className="w-full bg-white rounded-lg border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                    placeholder="Email"
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

            <View>
                <TextInput
                    className="w-full bg-white rounded-lg border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                    placeholder="Confirm Password"
                    value={values.passwordConfirmation}
                    onChangeText={handleChange('passwordConfirmation')}
                    onBlur={handleBlur('passwordConfirmation')}
                    secureTextEntry
                />
                {touched.passwordConfirmation && errors.passwordConfirmation && (
                    <Text style={{ color: 'red' }}>{errors.passwordConfirmation}</Text>
                )}
            </View>

            <Button
                onPress={() => handleSubmit()}
                textColor='text-white'
                bgColor='bg-cyan-600'
            >
                Register
            </Button>
        </View>
    );
}