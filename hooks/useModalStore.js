import { create } from "zustand";

const useModalStore = create((set, get) => ({
  openModals: [],
  isModalOpen: (id) => get().openModals.includes(id),
  openModal: (id) =>
    set((state) => ({ openModals: [...state.openModals, id] })),
  closeModal: (id) =>
    set((state) => ({
      openModals: state.openModals.filter((modalId) => modalId != id),
    })),
}));

export default useModalStore;
