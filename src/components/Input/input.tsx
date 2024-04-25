import React, { useRef, useEffect, useCallback, useState } from "react";

import { TextInputProps } from "react-native";

import { Container, InputComponent, Label, Icon } from "./styles";
import { useField } from "@unform/core";
import { theme } from "@/theme";

interface InputProps extends TextInputProps {
  name: string;
  label: string;
  icon?: any;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  icon,
  onChangeText,
  ...rest
}: InputProps) => {
  const inputRef: any = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) return inputRef.current.value;
        return "";
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value });
          inputRef.current.value = value;
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: "" });
          inputRef.current.value = "";
        }
      },
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(async () => {
    setIsFocused(false);
    if (inputRef.current.value) {
      setIsField(true);
    } else {
      setIsField(false);
    }
  }, []);

  const handleChangeText = useCallback(
    (text: string) => {
      if (inputRef.current) inputRef.current.value = text;
      if (onChangeText) onChangeText(text);
    },
    [onChangeText]
  );

  return (
    <>
      {label && <Label>{label}</Label>}
      <Container isFocused={isFocused} isErrored={!!error}>
        <InputComponent
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          onChangeText={handleChangeText}
          defaultValue={defaultValue}
          {...rest}
        />
        {!!icon && <Icon name={icon} size={20} isField={isField} isFocused={isFocused} isErrored={!!error} />}
      </Container>
    </>
  );
};
