import { create } from "zustand";

const useModalStore = create((set) => ({
  isModalOpen: false,
  modalContent: null,
  openModal: (content) =>
    set((state) => ({ isModalOpen: true, modalContent: content })),
  closeModal: () =>
    set((state) => ({ isModalOpen: false, modalContent: null })),
}));

export default useModalStore;
