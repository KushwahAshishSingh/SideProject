// // npm i react-native-flatlist-slider

// import React from 'react';
// import {FlatListSlider} from 'react-native-flatlist-slider';
// import {windowWidth, windowHeight} from './utils/Dimension';
// import Happy from './assets/happy.svg';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   Platform,
// } from 'react-native';

// const images = [
//   {
//     image:
//       'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
//     desc: 'Silent Waters in the mountains in midst of Himilayas',
//   },
//   {
//     image:
//       'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
//     desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
//   },
// ];

// export default Preview = ({
//   style,
//   item,
//   imageKey,
//   onPress,
//   index,
//   active,
//   local,
// }) => {
//   return (
//     <TouchableOpacity
//       style={[styles.videoContainer]}
//       onPress={() => onPress(item)}>
//       <View
//         style={{
//           marginBottom: -30,
//           zIndex: 1,
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//         }}>
//         <TouchableOpacity
//           onPress={() => {
//             alert('heknfk');
//           }}
//           style={{alignSelf: 'flex-start', marginRight: windowWidth / 3}}>
//           <Text>back</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => {
//             alert('hello');
//           }}
//           style={{flexDirection: 'row', marginLeft: windowWidth / 3}}>
//           <Text>back</Text>
//           <Text>back</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={{width: '100%', height: '30%'}}>
//         <FlatListSlider
//           data={images}
//           renderItem={
//             <View>
//               <Text>sdfs</Text>
//             </View>
//           }
//           indicatorInActiveColor="black"
//           indicatorActiveColor="red"
//           indicatorActiveWidth={10}
//           indicatorActiveHeight={10}
//           width={windowWidth}
//           height="100%"
//           onPress={() => {}}
//         />
//       </View>
//      {/* <Happy width={40}height={30}/> */}
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   videoContainer: {
//     width: '100%',

//     justifyContent: 'center',
//     alignItems: 'center',

//     display: 'flex',
//     justifyContent: 'center',
//     height: '100%',
//   },
// });



// npm i react-native-flatlist-slider

import React from 'react';
import {FlatListSlider} from 'react-native-flatlist-slider';
import {windowWidth, windowHeight} from './utils/Dimension';
import Happy from './assets/happy.svg';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';

const Individuals = require('./svgtopng/individuals_graphic.png');
const IndividualsHeading= "Individuals"
const  TextForIndividual = " The app is a fun filled journey that encourages"
const  SubTextForIndividual  = " the individuals to update aspects."

const Students = require('./svgtopng/students_graphic.png')
const StudentsHeading = "Students"
const TextForStudent = "Each student to see their own position in the"
const SubTextForStudent = "rankings amongst 70 lakh students."

const University = require('./svgtopng/universities_graphic.png')
const UniversityHeading = " Universities / Institutes";
const TextForUniversity = "The higher education regulator in Infua that has"
const SubTextForUniversity = "12000 colleges."

const Skips = "Skip"

export default Preview = ({
  style,
  item,
  imageKey,
  onPress,
  index,
  active,
  local,
  FlatList
}) => {
  return (
    <View
      style={[styles.videoContainer]}
      onPress={() => onPress(item)}>
      
      
      <View style={{alignSelf:"flex-end"}} >

      <TouchableOpacity style={{alignSelf:'flex-end', marginTop:40}}>
      <Text style={{fontSize:12, color:"#A8AAA7", fontWeight:"500", letterSpacing:0.5}}>{Skips}</Text>
      </TouchableOpacity>
      </View>

        <View style={{marginTop:"25%"}}>
        <Image source={Students} resizeMode="cover" size={40}  />
      
      </View>
        <View style={{marginTop:"10%", alignItems:"center"}}>
          <Text style={styles.TextStyle}>
            {StudentsHeading}
          </Text>
          <View style={{alignItems:"center", justifyContent:"center", margin:10}}>
          <Text style={{ letterSpacing:0.5, alignSelf:"center",fontSize:13, fontWeight:"500", color:"#A8AAA7"}}>
          {TextForStudent}
        </Text>
        <Text style={{ letterSpacing:0.5, alignSelf:"center",fontSize:13, fontWeight:"500", color:"#A8AAA7"}}>
        {SubTextForStudent}
      </Text>
          </View>
        
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
  display:'flex',
   justifyContent:'center',
   alignItems: 'center',
   alignSelf: 'center'
  },
  TextStyle:{fontSize:24, color:"#9D008B", fontWeight:"700", letterSpacing:0.5}
});

