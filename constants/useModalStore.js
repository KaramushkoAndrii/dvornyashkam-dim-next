"use client";

import { create } from "zustand";

const useModalStore = create((set) => ({
  isModalOpen: false,
  openModal: () => set((state) => ({ isModalOpen: true })),
  closeModal: () => set((state) => ({ isModalOpen: false })),
}));

export default useModalStore;
