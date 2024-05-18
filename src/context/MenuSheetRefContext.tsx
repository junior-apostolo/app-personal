import Bottom from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import React, {
  ReactNode,
  RefObject,
  createContext,
  useContext,
  useRef,
} from "react";

type BottomSheetProviderProps = {
  children: ReactNode;
};

type BottomSheetContextValue = {
  bottomSheetRef: RefObject<BottomSheetMethods>;
  children: ReactNode;
};

export const BottomSheetContext = createContext<
  BottomSheetContextValue
>({} as BottomSheetContextValue);

export const BottomSheetProvider = ({ children }: BottomSheetProviderProps) => {
  const bottomSheetRef = useRef<Bottom>(null);


  return (
    <BottomSheetContext.Provider value={{ bottomSheetRef, children }}>
      {children}
    </BottomSheetContext.Provider>
  );
};

export const useBottomSheetRef = () => {
  return useContext(BottomSheetContext);
};
