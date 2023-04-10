import React, { ReactNode } from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  ViewStyle,
} from "react-native";
import { theme } from "../core/theme";

interface BackgroundProps {
  children: ReactNode;
}

type Styles = {
  background: ViewStyle;
  container: ViewStyle;
};

export default function Background({ children }: BackgroundProps) {
  return (
    <ImageBackground
      source={require("../assets/background_dot.png")}
      resizeMode="repeat"
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create<Styles>({
  background: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
