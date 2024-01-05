import axios, { AxiosInstance } from "axios";
import {
  Context,
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useContext,
  useRef,
} from "react";

const AxiosContext: Context<AxiosInstance> = createContext(axios.create());

export const AxiosProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const axiosInstance = useRef(
    axios.create({
      baseURL: "http://localhost:8080/api/",
      timeout: 1000,
      headers: { "Content-Type": "application/json" },
    })
  );

  return (
    <AxiosContext.Provider value={axiosInstance.current}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxios = () => useContext(AxiosContext);