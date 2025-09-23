"use client";

import { fetchApi } from "@/lib/api";
import useContactsStore from "@/hooks/useContactsStore";
import { useEffect } from "react";

const ContactProvider = ({ children }) => {
  const { contacts, setContacts } = useContactsStore();

  useEffect(() => {
    if (!contacts) {
      fetchApi("/contact")
        .then((res) => {
          const { email, instagram, telegram, phone } = res.data;
          setContacts({ email, instagram, telegram, phone });
        })
        .catch((e) => console.error(e));
    }
  }, [contacts, setContacts]);
  return <>{children}</>;
};

export default ContactProvider;
