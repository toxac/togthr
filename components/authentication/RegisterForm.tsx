import { useFormik } from 'formik';
import React, { useState } from 'react';
import { View, Text, TextInput, ActivityIndicator, Alert } from 'react-native';
import * as Yup from 'yup';

import Button from '../Button'

import { supabase } from '~/lib/supabase';




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
    // Component State
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [formSubmissionError, setFormSubmissionError] = useState("");

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirmation: '',
        },
        validationSchema: registerSchema,
        onSubmit: async (values) => {
            setIsFormSubmitting(true);
            const { data: { session }, error } = await supabase.auth.signUp({
                email: values.email,
                password: values.password
            })
            if (error) {
                setFormSubmissionError(error.message);
                Alert.alert(formSubmissionError);
            }
            if (!session) Alert.alert('Please check your inbox for email verification!')
            setIsFormSubmitting(false)
        },
    });

    return (
        <View className="w-full p-10 gap-6">
            <View>
                <TextInput
                    className="w-full bg-white rounded-lg border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                    placeholder="Email"
                    value={formik.values.email}
                    onChangeText={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                {formik.touched.email && formik.errors.email && (
                    <Text style={{ color: 'red' }}>{formik.errors.email}</Text>
                )}
            </View>

            <View>
                <TextInput
                    className="w-full bg-white rounded-lg border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                    placeholder="Password"
                    value={formik.values.password}
                    onChangeText={formik.handleChange('password')}
                    onBlur={formik.handleBlur('password')}
                    secureTextEntry
                />
                {formik.touched.password && formik.errors.password && (
                    <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
                )}
            </View>

            <View>
                <TextInput
                    className="w-full bg-white rounded-lg border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2"
                    placeholder="Confirm Password"
                    value={formik.values.passwordConfirmation}
                    onChangeText={formik.handleChange('passwordConfirmation')}
                    onBlur={formik.handleBlur('passwordConfirmation')}
                    secureTextEntry
                />
                {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation && (
                    <Text style={{ color: 'red' }}>{formik.errors.passwordConfirmation}</Text>
                )}
            </View>

            <Button
                onPress={() => formik.handleSubmit()}
                textColor='text-white'
                bgColor='bg-cyan-600'
            >
                {isFormSubmitting ? <ActivityIndicator /> : 'Register'}
            </Button>
        </View>
    );
}