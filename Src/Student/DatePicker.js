// import React, { useState } from "react";
// import DatePicker from "react-native-date-picker";
// import { Button, Text } from "react-native-paper";

// export default Example = () => {
//   const [date, setDate] = useState(new Date());
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <Button
//         icon="calendar-month-outline"
//         mode="elevated"
//         onPress={() => setOpen(true)}
//         style={{
//           backgroundColor: "#fff",
//           width: 300,
//           marginLeft: "14%",
//           marginTop: "5%",
//         }}
//       >
//         <Text style={{ fontWeight: "bold" }}>Select your Registered Date</Text>
//       </Button>

//       <DatePicker
//         modal
//         mode="date"
//         locale="fr"
//         open={open}
//         date={date}
//         onConfirm={(date) => {
//           setOpen(false);
//           setDate(date);
//         }}
//         onCancel={() => {
//           setOpen(false);
//         }}
//       />
//     </>
//   );
// };

//Date picker add////////////////

import React,{useState} from "react";
import { View, Text } from "react-native";
import { DatePickerInput } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { en, registerTranslation } from 'react-native-paper-dates'
registerTranslation('en', en)


const DatePicker=()=> {
  const [std_reg_date, setStd_reg_date] = useState("")

  return (
    <SafeAreaProvider>
      <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
        <DatePickerInput
          locale="en"
          label="Registerd Date"
          value={std_reg_date}
          onChange={(d) => setStd_reg_date(d)}
          inputMode="start"
          style={{backgroundColor:'#fff',width:"70%"}}
        />
      </View>
    </SafeAreaProvider>
  );
}
export default DatePicker;
