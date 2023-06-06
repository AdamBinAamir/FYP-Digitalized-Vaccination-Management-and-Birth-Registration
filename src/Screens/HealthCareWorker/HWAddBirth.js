import React, { useState,useEffectrr } from 'react';
import { View, Button, TextInput, ScrollView,StyleSheet, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import { useFormik } from 'formik';
import axios from 'axios';
import LoadingIndicator from '../LoadingIndicator';
import endpoint from '../endpoint';

const HWAddBirth = ({route, navigation}) => {
  
  const { itemId } = route.params;
console.log('EmailAddbirth: ',itemId);
  const [Gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);
  const HCW_Email = itemId;
  const access = 'Parent';
  const temp_date = new Date();
  const date = temp_date.toLocaleString();

  const saveData = async () => {
    setLoading(true);
    try{
    let formFiel = new FormData();
    formFiel.append('id', formik.values.Father_CNIC);
    formFiel.append('Contact', formik.values.Contact);
    formFiel.append('Mother_CNIC', formik.values.Mother_CNIC);
    formFiel.append('Father_Email', formik.values.Father_Email);
    formFiel.append('Password', formik.values.Password);
    formFiel.append('City', formik.values.City);
    formFiel.append('Address', formik.values.Address);
    formFiel.append('access', access);

    const response=await axios({
      method: 'POST',
      url: `${endpoint}/saveParent`,
      data: formFiel,
    })
    gen=response.status
console.log(Gender,"asdf")
  
     if(gen){ let formField = new FormData();
      formField.append('id', formik.values.id);
      formField.append('fullName', formik.values.fullName);
      formField.append('Gender', formik.values.Gender);
      formField.append('birth_date', date);
      formField.append('RegisteredBy', HCW_Email);
      formField.append('Father_CNIC',formik.values.Father_CNIC);
       axios({
        method: 'POST',
        url: `${endpoint}/saveBirthRecord`,
        data: formField,
      }).then((response) => {
        console.log(response.status);
        navigation.navigate('HWDashboard',{userEmail:itemId});
        setLoading(false);
        ToastAndroid.show('Data Saved', ToastAndroid.SHORT);
      });}
    }
    catch(error){
      setLoading(false);
      ToastAndroid.show('Unable to Save Data check entries', ToastAndroid.SHORT);
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      id: '',
      fullName: '',
      Father_Email: '',
      Password: '',
      Contact: '',
      Father_CNIC: '',
      Mother_CNIC: '',
      Gender: '',
      City: '',
      Address: '',
    },
    validate: (values) => {
      const errors = {};

      if (!values.id) {
        errors.id = 'Child ID is required';
      }

      if (!values.fullName) {
        errors.fullName = 'Full Name is required';
      }

      if (!values.Father_Email) {
        errors.Father_Email = 'Father Email is required';
      } else if (!/^\S+@\S+\.\S+$/.test(values.Father_Email)) {
        errors.Father_Email = 'Invalid email format';
      }

      if (!values.Password) {
        errors.Password = 'Password is required';
      } else if (values.Password.length < 6) {
        errors.Password = 'Password must be at least 6 characters long';
      }

      if (!values.Contact) {
        errors.Contact = 'Contact Number is required';
      } else if (!/^\d{10}$/.test(values.Contact)) {
        errors.Contact = 'Invalid contact number format';
      }

      if (!values.Father_CNIC) {
        errors.Father_CNIC = 'Father CNIC is required';
      } else if (!/^\d{13}$/.test(values.Father_CNIC)) {
        errors.Father_CNIC = 'Invalid CNIC format';
      }

      if (!values.Mother_CNIC) {
        errors.Mother_CNIC = 'Mother CNIC is required';
      } else if (!/^\d{13}$/.test(values.Mother_CNIC)) {
        errors.Mother_CNIC = 'Invalid CNIC format';
      }

      if (!values.Gender) {
        errors.Gender = 'Gender is required';
      }
      if (!values.City) {
        errors.City = 'City is required';
      }
      if (!values.Address) {
        errors.Address = 'Address is required';
      }
      return errors;
    },
    onSubmit: saveData,
  });

  return (
    <ScrollView>
     <View style={styles.container}>
     {loading && <LoadingIndicator />}
       <Text style={styles.heading}>Add New Birth Record</Text>
       <View style={styles.card}>
       <View style={styles.inputContainer}>
      <TextInput
        placeholder="Child ID"
        onChangeText={formik.handleChange('id')}
        value={formik.values.id}
      />
      {formik.errors.id && <Text style={styles.errorText}>{formik.errors.id}</Text>}
      </View>
      <View style={styles.inputContainer}>
      <TextInput
        placeholder="Child Full Name"
        onChangeText={formik.handleChange('fullName')}
        value={formik.values.fullName}
      />
                {formik.errors.fullName && <Text style={styles.errorText}>{formik.errors.fullName}</Text>}
      </View>
      <View style={styles.inputContainer}>
      <TextInput
        placeholder="Father Email"
        onChangeText={formik.handleChange('Father_Email')}
        value={formik.values.Father_Email}
      />
       {formik.errors.Father_Email && (
            <Text style={styles.errorText}>{formik.errors.Father_Email}</Text>
          )}
      </View>
      <View style={styles.inputContainer}>
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={formik.handleChange('Password')}
        value={formik.values.Password}
      />
                {formik.errors.Password && <Text style={styles.errorText}>{formik.errors.Password}</Text>}

      </View>
      <View style={styles.inputContainer}>
      <TextInput
        placeholder="Contact Number"
        onChangeText={formik.handleChange('Contact')}
        value={formik.values.Contact}
      />
                {formik.errors.Contact && <Text style={styles.errorText}>{formik.errors.Contact}</Text>}
      </View>
      <View style={styles.inputContainer}>
      <TextInput
        placeholder="Father CNIC"
        onChangeText={formik.handleChange('Father_CNIC')}
        value={formik.values.Father_CNIC}
      />
       {formik.errors.Father_CNIC && (
            <Text style={styles.errorText}>{formik.errors.Father_CNIC}</Text>
          )}
      </View>
      <View style={styles.inputContainer}>
      <TextInput
        placeholder="Mother CNIC"
        onChangeText={formik.handleChange('Mother_CNIC')}
        value={formik.values.Mother_CNIC}
      />
      {formik.errors.Mother_CNIC && (
            <Text style={styles.errorText}>{formik.errors.Mother_CNIC}</Text>
          )}
      </View>
      <View style={styles.inputContainer}>
      <TextInput
        placeholder="Gender"
        onChangeText={formik.handleChange('Gender')}
        value={formik.values.Gender}
      />
                {formik.errors.Gender && <Text style={styles.errorText}>{formik.errors.Gender}</Text>}
      </View>
      <View style={styles.inputContainer}>
      <TextInput
        placeholder="City"
        onChangeText={formik.handleChange('City')}
        value={formik.values.City}
      />
                {formik.errors.City && <Text style={styles.errorText}>{formik.errors.City}</Text>}
      </View>
      <View style={styles.inputContainer}>
      <TextInput
        placeholder="Address"
        onChangeText={formik.handleChange('Address')}
        value={formik.values.Address}
      />
                {formik.errors.Address && <Text style={styles.errorText}>{formik.errors.Address}</Text>}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => saveData()}>
          <Text style={styles.buttonText}>Add Record</Text>
         </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 12,
  },
    heading:{
      marginTop: '20%',
      fontSize: 30,
      fontWeight: 'bold',
      color:'white'
    },
    Text:{
      marginTop:20,
      fontWeight: 'bold',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#0f1a1e',
    },
    card: {
      borderRadius: 10,
      backgroundColor: '#eee',
      marginTop: '20%',
      borderRadius: 40,
      // margin: '10%',
      paddingTop: '10%',
      paddingBottom: '20%',
      width: '100%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputContainer: {
      borderRadius: 20,
      backgroundColor: 'lightgrey',
      margin: '2.5%',
      padding: '2.5%',
      width: '80%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    input: {
      padding:5,
      fontSize: 16,
    },
    button: {
      marginTop: 20,
      backgroundColor: '#0f1a1e',
      borderRadius: 20,
      padding: 15,
      width: '60%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    button2: {
      marginTop: '5%',
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 15,
      width: '60%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    button3: {
      marginTop: '4%',
      backgroundColor: 'grey',
      borderRadius: 10,
      padding: 5,
      width: '36%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    buttonText: {
      fontSize: 16,
      color: '#fff',
      textAlign: 'center',
    },
    buttonText1: {
      fontSize: 16,
      color: 'black',
      textAlign: 'center',
    },
    icons: {
      backgroundColor: '#e3e3e3',
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    });

export default HWAddBirth;


// import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, ScrollView, ToastAndroid } from 'react-native';

// import React, { useState } from 'react';

// export default function HWAddBirth({navigation}) {
//   const [cID, setCid] = useState('');
//   const [cname, setCname] = useState('');
//   const [femail, setFemail] = useState('');
//   const [fcnic, setFCNIC] = useState('');
//   const [mcnic, setMCNIC] = useState('');
//   const [gender, setGender] = useState('');
//   const [birthdate, setBirthdate] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');

//   const error = async () => {
//     if(cID=='' || cname == ''|| femail == ''|| fcnic == ''|| mcnic == ''|| gender == ''|| birthdate == ''|| phone == '' || password == '')
//    {
//     ToastAndroid.show('Credentials not Entered', ToastAndroid.SHORT);
//    }
//    else{
//     saveData();
//    }
//   };


//   const saveData = () =>
//   {
//       let formField = new FormData()
//       formField.append('id',cID)
//     formField.append('FullName',cname)
//     formField.append('Father_Email',femail)
//     formField.append('Password',password)
//     formField.append('Contact',phone)
//     formField.append('Father_CNIC',fcnic)
//     formField.append('Mother_CNIC',mcnic)
//     formField.append('Gender',gender)
//     formField.append('BirthDate',birthdate)
//     formField.append('access',"parent")
//     formField.append('HCW_ID','1')
//             fetch("http://172.20.10.2:8000/savechild", {
//             method: "POST",
//             body:  formField
//          })
//          .then(function(response){ 
//           return response.json();   
//          })
//          .then(function(data){ 
//          console.log(data.status)
//          });
//          navigation.navigate('HWDashboard')
//         }

//   return (
//     <ScrollView>
//     <View style={styles.container}>
      
//       <Text style={styles.heading}>Add New Birth Record</Text>
//       <View style={styles.card}>
//       <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Child ID"
//             onChangeText={text => setCid(text)}
//             value={cID}
//             keyboardType="numeric"
//           />
//         </View>
//       <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Child Full Name"
//             onChangeText={text => setCname(text)}
//             value={cname}
//             inputMode='text'
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Father Email"
//             onChangeText={text => setFemail(text)}
//             value={femail}
//             autoComplete='email'
//             inputMode='email'
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             autoComplete='new-password'
//             onChangeText={text => setPassword(text)}
//             value={password}

//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             autoComplete='tel'
//             placeholder="Phone"
//             onChangeText={text => setPhone(text)}
//             value={phone}
//             keyboardType="phone-pad"
//             inputMode='tel'
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Father CNIC"
//             onChangeText={text => setFCNIC(text)}
//             value={fcnic}
//             keyboardType="numeric"
//             inputMode='numeric'
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Mother CNIC"
//             onChangeText={text => setMCNIC(text)}
//             value={mcnic}
//             keyboardType="numeric"
//             inputMode='numeric'
//           />
//         </View>
//       <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Gender"
//             autoComplete='gender'
//             onChangeText={text => setGender(text)}
//             value={gender}
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             autoComplete='birthdate-full'
//             placeholder="Birth Date"
//             onChangeText={text => setBirthdate(text)}
//             value={birthdate}
//             inputMode='numeric'
//           />
//         </View>
//         <TouchableOpacity style={styles.button} onPress={() => error()}>
//           <Text style={styles.buttonText}>Add Record</Text>
//         </TouchableOpacity>
//       </View>
      
//     </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   heading:{
//     marginTop: '20%',
//     fontSize: 30,
//     fontWeight: 'bold',
//     color:'white'
//   },
//   Text:{
//     marginTop:20,
//     fontWeight: 'bold',
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#0f1a1e',
//   },
//   card: {
//     borderRadius: 10,
//     backgroundColor: '#eee',
//     marginTop: '20%',
//     borderRadius: 40,
//     // margin: '10%',
//     paddingTop: '10%',
//     paddingBottom: '20%',
//     width: '100%',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputContainer: {
//     borderRadius: 20,
//     backgroundColor: 'lightgrey',
//     margin: '2.5%',
//     padding: '2.5%',
//     width: '80%',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   input: {
//     padding:5,
//     fontSize: 16,
//   },
//   button: {
//     marginTop: 20,
//     backgroundColor: '#0f1a1e',
//     borderRadius: 20,
//     padding: 15,
//     width: '60%',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   button2: {
//     marginTop: '5%',
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 15,
//     width: '60%',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   button3: {
//     marginTop: '4%',
//     backgroundColor: 'grey',
//     borderRadius: 10,
//     padding: 5,
//     width: '36%',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   buttonText: {
//     fontSize: 16,
//     color: '#fff',
//     textAlign: 'center',
//   },
//   buttonText1: {
//     fontSize: 16,
//     color: 'black',
//     textAlign: 'center',
//   },
//   icons: {
//     backgroundColor: '#e3e3e3',
//     textAlign: 'center',
//     textAlignVertical: 'center',
//   },
//   });