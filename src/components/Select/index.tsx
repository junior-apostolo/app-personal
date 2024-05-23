import { theme } from "@/theme";
import React, { memo, useCallback, useState } from "react";
import { Text, View } from "react-native";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

interface SelectProps {
  label: string;
  placeholder: string;
  title: string;
  value: string;
  data: Array<any>;
  setItem: React.Dispatch<React.SetStateAction<string>>;
}

interface MenuProps {
  title: string;
  id: string;
}

export const Select: React.FC<SelectProps> = memo(
  ({ label, placeholder, title, value, data, setItem }) => {
    const [loading, setLoading] = useState(false);
    const [suggestionsList, setSuggestionsList] = useState<any>(null);
    const [selectedItem, setSelectedItem] = useState<null | string>(null);

    const getSuggestions = useCallback(async (q: string) => {
      const filterToken = q.toLowerCase();
      console.log("getSuggestions", q);
      if (typeof q !== "string" || q.length < 3) {
        setSuggestionsList(null);
        return;
      }
      setLoading(true);
      const suggestions = data
        .filter((item) => item[title].toLowerCase().includes(filterToken))
        .map((item) => ({
          id: item[value],
          title: item[title],
        }));
      setSuggestionsList(suggestions);
      setLoading(false);
    }, []);

    return (
      <View style={{ marginVertical: 10 }}>
        <Text>{label}</Text>
        <AutocompleteDropdown
          clearOnFocus={false}
          closeOnBlur={true}
          dataSet={suggestionsList}
          onChangeText={getSuggestions}
          initialValue={{ id: "2" }} // or just '2'
          onSelectItem={(item: any) => {
            if (item) {
              setSelectedItem(item.title); // Set only the title or the id, based on your requirement
              setItem(item.id);
            } else {
              setSelectedItem("");
            }
          }}
          textInputProps={{
            placeholder: placeholder,
            autoCorrect: false,
            autoCapitalize: "none",

            style: {
              color: "#000",
              height: 43,
            },
          }}
          inputContainerStyle={{
            backgroundColor: "#fff",
            borderRadius: theme.borderRadius.md,
            borderWidth: 1,
            borderColor: "#cccccc",
            height: 43,
          }}
          suggestionsListContainerStyle={{
            right: 20,
            borderRadius: theme.borderRadius.md,
            borderWidth: 1,
            borderColor: "#cccccc",
          }}
        />
      </View>
    );
  }
);

export default Select;
