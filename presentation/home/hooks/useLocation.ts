import * as Location from "expo-location";
import { useCallback, useEffect, useState } from "react";

export interface UseLocationReturn {
  locationText: string | null;
  errorMsg: string | null;
  isLoading: boolean;
}

export const useLocation = (): UseLocationReturn => {
  const [locationText, setLocationText] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getCurrentLocation = useCallback(async () => {
    setIsLoading(true);
    setErrorMsg(null);

    try {
      // Solicitar permisos
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permiso de ubicación denegado");
        return;
      }

      // Obtener ubicación actual
      const { coords } = await Location.getCurrentPositionAsync({});

      // Obtener dirección legible
      const [address] = await Location.reverseGeocodeAsync({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });

      if (address) {
        setLocationText(`${address.city}, ${address.region}`);
      } else {
        setErrorMsg("No se pudo obtener la dirección");
      }
    } catch (err) {
      console.error("Error obteniendo ubicación:", err);
      setErrorMsg("No se pudo obtener la ubicación");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  return { locationText, errorMsg, isLoading };
};
