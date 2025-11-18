"use client";

import { fetchApi } from "@/lib/api";
import useContactsStore from "@/hooks/useContactsStore";
import { useEffect } from "react";

const ContactProvider = ({ children }) => {
  const { contacts, setContacts } = useContactsStore();

  useEffect(() => {
    if (!contacts) {
      fetchApi("/contact", { populate: "social" })
        .then((res) => {
          const { email, phone, social } = res.data;
          setContacts({ email, phone, social });
        })
        .catch((e) => console.error(e));
    }
  }, [contacts, setContacts]);
  return <>{children}</>;
};

export default ContactProvider;
