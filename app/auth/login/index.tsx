import { useAuthStore } from "@/presentation/auth/store/useAuthStore";
import { LoginFormData, loginSchema } from "@/types/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAvoidingView, ScrollView, View, useWindowDimensions, Alert } from "react-native";
import { Button, Text, TextInput, useTheme, HelperText } from "react-native-paper";

const LoginScreen = () => {
  const { login, status } = useAuthStore();
  const { colors } = useTheme();
  const { height } = useWindowDimensions();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLogin = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
      router.replace("/(tabs)");
    } catch (error) {
      Alert.alert("Error", "Credenciales incorrectas");
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView
        style={{
          paddingHorizontal: 40,
          backgroundColor: colors.background,
        }}
      >
        <View
          style={{
            paddingTop: height * 0.35,
          }}
        >
          <Text variant="headlineMedium">Ingresar</Text>
          <Text style={{ color: "grey" }}>
            Por favor ingrese para continuar
          </Text>
        </View>

        {/* Email y Password */}
        <View style={{ marginTop: 20 }}>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  placeholder="Correo electrónico"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  error={!!errors.email}
                  style={{ marginBottom: 8 }}
                />
                {errors.email && (
                  <HelperText type="error" visible={!!errors.email}>
                    {errors.email.message}
                  </HelperText>
                )}
              </>
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  placeholder="Contraseña"
                  secureTextEntry
                  autoCapitalize="none"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  error={!!errors.password}
                  style={{ marginBottom: 8 }}
                />
                {errors.password && (
                  <HelperText type="error" visible={!!errors.password}>
                    {errors.password.message}
                  </HelperText>
                )}
              </>
            )}
          />
        </View>

        {/* Spacer */}
        <View style={{ marginTop: 10 }} />

        {/* Botón */}
        <Button
          mode="contained"
          onPress={handleSubmit(onLogin)}
          disabled={isSubmitting}
          loading={isSubmitting}
          style={{ marginTop: 20 }}
        >
          Ingresar
        </Button>

        {/* Spacer */}
        <View style={{ marginTop: 50 }} />

        {/* Enlace a registro */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>¿No tienes cuenta?</Text>
          {/* <ThemedLink href="/auth/register" style={{ marginHorizontal: 5 }}>
            Crear cuenta
          </ThemedLink> */}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
