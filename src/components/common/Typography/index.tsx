import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

const variantTypes = {
  small: "sm",
  medium: "md",
  large: "lg",
  extraLarge: "xlg",
  title: "title",
  subtitle: "subtitle",
} as const;

type VariantTypes = typeof variantTypes[keyof typeof variantTypes];

interface TypographyProps extends TextProps {
  variant?: VariantTypes;
  children: React.ReactNode;
}
export default function Typography({
  children,
  variant = "sm",
  ...others
}: TypographyProps) {
  const currentStyle = styles[variant];
  return (
    <Text {...others} style={[others.style, currentStyle]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  [variantTypes.small]: {
    fontSize: 18,
  },
  [variantTypes.medium]: {
    fontSize: 22,
  },
  [variantTypes.large]: {
    fontSize: 24,
  },
  [variantTypes.extraLarge]: {},
  [variantTypes.title]: {
    fontWeight: "bold",
    fontSize: 26,
  },
  [variantTypes.subtitle]: {
    fontSize: 18,
    fontWeight: "500",
  },
});
