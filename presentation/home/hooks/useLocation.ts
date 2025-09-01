import * as Location from "expo-location";
import { useEffect, useState } from "react";

export interface UseLocationReturn {
  locationText: string | null;
  errorMsg: string | null;
  isLoading: boolean;
}

export const useLocation = (): UseLocationReturn => {
  const [locationText, setLocationText] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCurrentLocation() {
      try {
        setIsLoading(true);

        // Solicitar permisos
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permiso denegado");
          setIsLoading(false);
          return;
        }

        // Obtener ubicación actual
        const loc = await Location.getCurrentPositionAsync({});

        // Obtener dirección legible
        const address = await Location.reverseGeocodeAsync({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
        });

        if (address.length > 0) {
          const place = address[0];
          setLocationText(`${place.city}, ${place.region}`);
        } else {
          setErrorMsg("No se pudo obtener la dirección");
        }
      } catch (err) {
        setErrorMsg("No se pudo obtener ubicación");
      } finally {
        setIsLoading(false);
      }
    }

    getCurrentLocation();
  }, []);

  return {
    locationText,
    errorMsg,
    isLoading,
  };
};
