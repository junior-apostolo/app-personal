import React, { useEffect, useState } from "react";
import { Image, View, Text, ImageProps } from "react-native";

// const API_URL = "https://randomuser.me/api/";

type AvatarProps = ImageProps & {};

export function Avatar({ ...rest }: AvatarProps) {
  return <Image className="w-8 h-8 rounded-full" {...rest} />;
}
