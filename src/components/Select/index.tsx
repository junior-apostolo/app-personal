import { theme } from "@/theme";
import React, { memo, useCallback, useRef, useState } from "react";
import { Button, Dimensions, Text, View, Platform } from "react-native";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

export const Select = memo(() => {
  const [loading, setLoading] = useState(false);
  const [suggestionsList, setSuggestionsList] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownController = useRef(null);

  const searchRef = useRef(null);

  const getSuggestions = useCallback(async (q) => {
    const filterToken = q.toLowerCase();
    console.log("getSuggestions", q);
    if (typeof q !== "string" || q.length < 3) {
      setSuggestionsList(null);
      return;
    }
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const items = await response.json();
    const suggestions = items
      .filter((item) => item.title.toLowerCase().includes(filterToken))
      .map((item) => ({
        id: item.id,
        title: item.title,
      }));
    setSuggestionsList(suggestions);
    setLoading(false);
  }, []);

  const onClearPress = useCallback(() => {
    setSuggestionsList(null);
  }, []);

  const onOpenSuggestionsList = useCallback((isOpened) => {}, []);

  return (
    <>
      <AutocompleteDropdown
        ref={searchRef}
        controller={(controller) => {
          dropdownController.current = controller;
        }}
        // initialValue={'1'}
        direction={Platform.select({ ios: "down" })}
        dataSet={suggestionsList}
        onChangeText={getSuggestions}
        onSelectItem={(item) => {
          item && setSelectedItem(item.id);
        }}
        debounce={300}
        suggestionsListMaxHeight={Dimensions.get("window").height * 0.4}
        onClear={onClearPress}
        //  onSubmit={(e) => onSubmitSearch(e.nativeEvent.text)}
        onOpenSuggestionsList={onOpenSuggestionsList}
        loading={loading}
        useFilter={false} // set false to prevent rerender twice
        textInputProps={{
          placeholder: "Selecione o aluno",
          autoCorrect: false,
          autoCapitalize: "none",
          style: {
            color: "#000",

          },
        }}
        rightButtonsContainerStyle={{

        }}
        inputContainerStyle={{
          backgroundColor: "#fff",
          borderRadius: theme.borderRadius.md,
          borderWidth: 1,
          borderColor: "#cccccc",
        }}
        suggestionsListContainerStyle={{
          backgroundColor: "#fff",
          right: 20,
          borderRadius: theme.borderRadius.md,
          borderWidth: 1,
          borderColor: "#cccccc"
        }}
        renderItem={(item, text) => (
          <Text style={{ color: "#000", padding: 5 }}>{item.title}</Text>
        )}
        //   ChevronIconComponent={<Feather name="chevron-down" size={20} color="#fff" />}
        //   ClearIconComponent={<Feather name="x-circle" size={18} color="#fff" />}
        inputHeight={50}
        showChevron={false}
        closeOnBlur={false}
        //  showClear={false}
      />
    </>
  );
});

export default Select;
