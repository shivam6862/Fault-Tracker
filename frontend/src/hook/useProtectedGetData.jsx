"use client";
import { useState, useEffect } from "react";
import { useNotification } from "./useNotification";

export const useProtectedGetData = (url, defaultValue) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(defaultValue);
  const { NotificationHandler } = useNotification();

  useEffect(() => {
    const loadResources = async () => {
      const user = "s_kumar4@me.iitr";
      if (!user) {
        setData(defaultValue);
        setIsLoading(false);
        return;
      }
      try {
        const response = await fetch(url, {
          headers: {
            AuthToken: user,
          },
        });
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
        NotificationHandler("Error", "Check your connection!", "Error");
        setData(defaultValue);
      }
      setIsLoading(false);
    };
    loadResources();
  }, []);

  return { isLoading, data, setData };
};
