import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { slideFromLeft, slideFromRight } from "@/constants/animations";
import useModalStore from "@/hooks/useModalStore";
import "./HelpListItem.scss";
// import Modal from "@/components/UI/modal/Modal";
// import ModalForm from "@/components/UI/modalForm/ModalForm";

const HelpListItem = ({ data, index, translationGroup }) => {
  const t = useTranslations();
  const { openModal, isModalOpen } = useModalStore();

  const { header, description, subDescription, type, src, linkContent } =
    data || {};

  const oddLi = index % 2 === 0 ? slideFromLeft : slideFromRight;

  const openHandler = (evt) => {
    evt.preventDefault();
    openModal();
  };

  return (
    <>
      <motion.li {...oddLi} className="detailed-item">
        <h3 className="h3">{t(`${translationGroup}.${header}`)}</h3>
        <p>{t(`${translationGroup}.${description}`)}</p>
        <footer className="detailed-item__footer">
          <p className="sub__text">
            {t(`${translationGroup}.${subDescription}`)}
          </p>
          {type === "button" ? (
            <button className="detailed-item__button" onClick={openHandler}>
              {linkContent}
            </button>
          ) : (
            <a
              className="detailed-item__link"
              href={`${type}:${src}`}
              target="_blank"
            >
              {linkContent}
            </a>
          )}
        </footer>
      </motion.li>

      {/* {isModalOpen && (
        <Modal>
          <ModalForm />
        </Modal>
      )} */}
    </>
  );
};

export default HelpListItem;
