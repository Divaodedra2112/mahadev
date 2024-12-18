import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './signup.styles';

const AdditionalInfo = ({
    gender,
    setGender,
    ageRange,
    setAgeRange,
    handleCreate,
    openAgeDropdown,
    setOpenAgeDropdown,
    goToBasicInfo,
    loading, 
}) => {
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButton}
                    onPress={goToBasicInfo}
                >
                <Text style={styles.backButtonText}>{'<'}</Text>
                </TouchableOpacity>
                <Text style={styles.additionalTitle}>Tell us About yourself</Text>
                <View style={styles.agebox}>
                <Text style={styles.labelText}>Who do you shop for ?</Text>
                <View style={styles.genderContainer}>
                    <TouchableOpacity
                        style={[styles.genderButton, gender === 'Men' && styles.selectedButton]}
                        onPress={() => setGender('Men')}
                    >
                        <Text
                            style={[styles.genderButtonText, gender === 'Men' && { color: "white" }]}
                        >
                            Men</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.genderButton, gender === 'Women' && styles.selectedButton]}
                        onPress={() => setGender('Women')}
                    >
                        <Text style={[styles.genderButtonText, gender === 'Women' && { color: "white" }]}>Women</Text>
                    </TouchableOpacity>
                </View>
                </View>
              

                <View style={styles.agebox}>
                <Text style={styles.labelText}>How Old are you?</Text>
                <DropDownPicker
                    open={openAgeDropdown}
                    value={ageRange}
                    items={[
                     
                        { label: '18-25', value: '18-25' },
                        { label: '26-35', value: '26-35' },
                        { label: '36-45', value: '36-45' },
                        { label: '46-60', value: '46-60' },
                        { label: '60+', value: '60+' },
                    ]}
                    setOpen={setOpenAgeDropdown}
                    setValue={setAgeRange}
                    style={styles.dropdown}
                    placeholder='Age Range' />
                </View>

               
            </View>
         
                <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={[styles.signUpButton, loading && { opacity: 0.7 }]} 
          onPress={loading ? null : handleCreate} 
        >
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <Text style={styles.buttonText}>Finish</Text>
          )}
        </TouchableOpacity>
      </View>
        </>
    )
};
export default AdditionalInfo