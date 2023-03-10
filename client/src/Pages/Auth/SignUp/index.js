import React from 'react'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Alert } from '@chakra-ui/react';
import { useFormik } from "formik";
import validationSchema from "./validations";
import { fetchRegister } from '../../../api';
import { useAuth } from '../../../contexts/AuthContext';

function SignUp() {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema, // validasyon şeması
    onSubmit: async (values, bag) => {
      try{
        const registerResponse = await fetchRegister({email:values.email, password: values.password});
        login(registerResponse); // üye olduysa giriş işlemini yap
        console.log(registerResponse)
      }catch(e){
        bag.setErrors({general: e.response.data.message})
      }
    }
  })
  return (
    <div>
      <Flex align="center" justifyContent="center" width="full" height="calc(100vh - 100px)">
        <Box border="1px" borderRadius="15" p={10}>
          <Box textAlign="center">
            <Heading>Sign Up</Heading>
          </Box>
          <Box my={5}>
            { // Validasyon hatalarını göster
              formik.errors.general && (
                <Alert status='error'>{ formik.errors.general }</Alert>
              )
            }
          </Box>
          <Box mt={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input name='email' type='text' 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur} 
                  value={formik.values.email} 
                  isInvalid={formik.touched.email && formik.errors.email} 
                />
              </FormControl>

              <FormControl mt="4">
                <FormLabel>Password</FormLabel>
                <Input name='password' type='password' 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur} 
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password} 
                />
              </FormControl>

              <FormControl mt="4">
                <FormLabel>Password Confirm</FormLabel>
                <Input name='passwordConfirm' type='password' 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur} 
                  value={formik.values.passwordConfirm}
                  isInvalid={formik.touched.passwordConfirm && formik.errors.passwordConfirm} 
                />
              </FormControl>

              <Button colorScheme='teal' variant='solid' width="full" type="submit" mt="4">Sign Up</Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default SignUp
