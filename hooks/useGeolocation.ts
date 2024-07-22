import { useState, useEffect } from "react";

interface GeolocationOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}

interface GeolocationCoordinates {
  latitude: number;
  longitude: number;
  altitude?: number | null;
  accuracy: number;
  altitudeAccuracy?: number | null;
  heading?: number | null;
  speed?: number | null;
}

interface GeolocationState {
  loading: boolean;
  error: GeolocationPositionError | null;
  data: GeolocationCoordinates | null;
}

export default function useGeolocation(options?: GeolocationOptions): GeolocationState {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<GeolocationPositionError | null>(null);
  const [data, setData] = useState<GeolocationCoordinates | null>(null);

  useEffect(() => {
    const successHandler = (position: GeolocationPosition) => {
      setLoading(false);
      setError(null);
      setData(position.coords);
    };

    const errorHandler = (error: GeolocationPositionError) => {
      setError(error);
      setLoading(false);
    };

    navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);

    const id = navigator.geolocation.watchPosition(successHandler, errorHandler, options);

    return () => navigator.geolocation.clearWatch(id);
  }, [options]);

  return { loading, error, data };
}
