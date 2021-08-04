import create from "zustand";
import { devtools } from "zustand/middleware";
import { configurePersist } from "zustand-persist";

const { persist, purge } = configurePersist({
  storage: localStorage,
});
let store = (set) => ({
  bears: { id: -1, email: "", parola: "" },
  updateStore: (i, e, p) => set({ bears: { id: i, email: e, parola: p } }),
});

store = devtools(store);

export const useStore = create(
  persist(
    {
      key: "persist",
    },
    store
  )
);
