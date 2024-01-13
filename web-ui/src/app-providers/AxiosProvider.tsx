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
      baseURL: "http://ec2-16-171-169-38.eu-north-1.compute.amazonaws.com:5000/api/",
      timeout: 1000000,
      headers: { "Content-Type": "application/json" }
    })
  );

  return (
    <AxiosContext.Provider value={axiosInstance.current}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxios = () => useContext(AxiosContext);