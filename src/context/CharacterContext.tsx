import { ReactNode, createContext, useContext, useState } from "react";
import { useFetchCharacters } from "../hooks/useFetchCharacters";
import useLocalStorage from "../hooks/useLocalStorage";

type CharacterProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type CharacterContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  isOpen: boolean;

  query: string;
  // setQuery: () => void;
};

const CharacterContext = createContext({} as CharacterContext);

function CharacterProvider({ children }: CharacterProviderProps) {
  const [query, setQuery] = useState("");
  const [data, isLoading, error] = useFetchCharacters(query);

  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  return (
    <CharacterContext.Provider
      value={{
        query,
        setQuery,
        data,
        isLoading,
        error,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
        isOpen,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

function useCharacter() {
  const context = useContext(CharacterContext);
  if (context === undefined)
    throw new Error("CharacterContext was used outside CharacterProvider");
  return context;
}

export { CharacterProvider, useCharacter };
