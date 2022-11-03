import { Text, View, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Button from "../components/Button";
import Capitalize from "../hooks/Capitalize";

const Form = ({ defaultValues }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <View>
      {Object.keys(control._defaultValues).map((defaultValue) => (
        <View key={defaultValue}>
          <Text style={{ marginBottom: 5, fontWeight: "600" }}>
            {Capitalize(defaultValue)}
          </Text>
          <View
            style={{
              backgroundColor: "#DFB2F4",
              width: 300,
              borderRadius: 8,
              marginBottom: 15,
            }}
          >
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  keyboardType="default"
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  style={{ padding: 15, color: "white", fontWeight: "700" }}
                />
              )}
              name={defaultValue}
            />
          </View>
        </View>
      ))}

      <Button
        text="Submit"
        bgColor="#55D6C2"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default Form;
