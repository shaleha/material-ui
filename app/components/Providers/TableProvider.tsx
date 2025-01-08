// TableContext.tsx
import React, { createContext, FC, ReactNode, useContext } from "react";

interface TableContextType {
  withBorders?: boolean;
  borderStyle?: string;
  withCorners?: boolean;
  roundsCorners?: string;
  children: ReactNode;
}

export type tableDynamicProps = Omit<TableContextType, "children">;

const TableContext = createContext<
  Omit<TableContextType, "children"> | undefined
>(undefined);

export const TableProvider: FC<TableContextType> = ({
  withBorders = false,
  borderStyle = "border-gray-300",
  children,
}) => {
  return (
    <TableContext.Provider
      value={{
        withBorders,
        borderStyle: withBorders ? `border ${borderStyle}` : "",
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export const useTableContext = () => {
  const context = useContext(TableContext);
  if (!context) {
    throw new Error("useTableContext must be used within a TableProvider");
  }
  return context;
};
