import { create } from "zustand";

const useContactsStore = create((set) => ({
  contacts: null,
  setContacts: (contacts) => set({ contacts }),
}));

export default useContactsStore;
