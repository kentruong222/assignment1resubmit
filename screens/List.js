import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';


const ContactList = () => {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'K', data: ['Ken', 'Kevin', 'Kassie', 'Kassidy']},
            {title: 'L', data: ['Larry', 'Lenny', 'Lorde', 'Langford', 'Lem', 'Lofi', 'Lobby']},
            {title: 'M', data: ['Manny', 'Mathew', 'Merrell', 'Merri', 'Mars', 'Michael', 'Mikey']},
            {title: 'N', data: ['Nick', 'Nicholas', 'Nickel', 'Nero']},
          ]}
          renderItem={({item}) => (
          <Text style={styles.item}>
          {item}
          </Text>
          )}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}

          keyExtractor={(item, index) => index}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 5,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 35,
      fontWeight: 'bold',
      backgroundColor: '#5e9dff',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      backgroundColor: '#c7ddff',
    },
  })

export default ContactList;