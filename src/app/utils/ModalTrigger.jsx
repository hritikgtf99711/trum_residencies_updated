"use client";

import { useModal } from '../hooks/modaContext';
import Modal from './Modal';
import Form from './Form';

export default function ModalTrigger() {
  const { isOpen, openModal, closeModal } = useModal();
  let basePath = process.env.NEXT_PUBLIC_BASE_PATH;

  return (
    <>
      <a
        onClick={(e) => {
          e.preventDefault(); // prevent href="#"
          openModal();
        }}
        className="sms-chat text-decoration-none"
        href="#"
        rel="nofollow"
      >
        <img
          src={basePath+"/email.png"}
          alt="SMS"
          width="24"
          height="24"
        />
      </a>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <Form />
      </Modal>
    </>
  );
}
