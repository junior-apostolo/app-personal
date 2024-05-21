import { theme } from "@/theme";
import React, { memo, useCallback, useRef, useState } from "react";
import { Button, Dimensions, Text, View, Platform } from "react-native";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

interface SelectProps {
  label: string;
  placeholder: string;
  title: string;
  key: string;
  data: Array<any>;
  setItem: React.Dispatch<React.SetStateAction<string>>;
}

export const Select: React.FC<SelectProps> = memo(
  ({ label, placeholder, title, key, data, setItem }) => {
    const [loading, setLoading] = useState(false);
    const [suggestionsList, setSuggestionsList] = useState<any>(null);
    const dropdownController: any = useRef(null);

    const searchRef = useRef(null);

    const getSuggestions = useCallback(async (q: string) => {
      const filterToken = q.toLowerCase();
      console.log("getSuggestions", q);
      if (typeof q !== "string" || q.length < 3) {
        setSuggestionsList(null);
        return;
      }
      setLoading(true);
      console.log(key)
      const suggestions = data.filter((item) =>
        item[title].toLowerCase().includes(filterToken)
      ).map(item => ({
        [key]: item[key],
        [title]: item[title],

      }));
      console.log(suggestions)
      setSuggestionsList(suggestions);
      setLoading(false);
    }, []);

    const onClearPress = useCallback(() => {
      setSuggestionsList(null);
    }, []);

    const onOpenSuggestionsList = useCallback((isOpened: boolean) => {}, []);

    return (
      <View style={{marginVertical: 10}}>
        <Text>{label}</Text>
        <AutocompleteDropdown
          ref={searchRef}
          controller={(controller) => {
            dropdownController.current = controller;
          }}
          // initialValue={'1'}
          direction={Platform.select({ ios: "down" })}
          dataSet={suggestionsList}
          onChangeText={getSuggestions}
          onSelectItem={(item:any) => {
            item && setItem(item[key]);
          }}
          debounce={300}
          suggestionsListMaxHeight={Dimensions.get("window").height * 0.4}
          onClear={onClearPress}
          //  onSubmit={(e) => onSubmitSearch(e.nativeEvent.text)}
          onOpenSuggestionsList={onOpenSuggestionsList}
          loading={loading}
          useFilter={false} // set false to prevent rerender twice
          textInputProps={{
            placeholder: placeholder,
            autoCorrect: false,
            autoCapitalize: "none",

            style: {
              color: "#000",
              height: 43,
            },
          }}
          rightButtonsContainerStyle={{}}
          inputContainerStyle={{
            backgroundColor: "#fff",
            borderRadius: theme.borderRadius.md,
            borderWidth: 1,
            borderColor: "#cccccc",
            height: 43,
          }}
          suggestionsListContainerStyle={{
            backgroundColor: "#fff",
            right: 20,
            borderRadius: theme.borderRadius.md,
            borderWidth: 1,
            borderColor: "#cccccc",
          }}
          renderItem={(item, text) => (
            <Text style={{ color: "#000", padding: 5 }}>{item[title]}</Text>
          )}
          //   ChevronIconComponent={<Feather name="chevron-down" size={20} color="#fff" />}
          //   ClearIconComponent={<Feather name="x-circle" size={18} color="#fff" />}
          inputHeight={50}
          showChevron={false}
          closeOnBlur={false}
          //  showClear={false}
        />
      </View>
    );
  }
);

export default Select;
