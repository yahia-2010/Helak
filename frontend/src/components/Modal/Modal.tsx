import { Transition, Dialog } from "@headlessui/react";
import React from "react";
import Button from "../Button";

export interface ModalPropsInterface {
  isOpen: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  closeModal?: () => void;
  actions?: Action[];
}

const Modal: React.FC<ModalPropsInterface> = ({
  isOpen,
  title,
  description,
  children,
  closeModal = () => {
    /* ... */
  },
  actions = [],
}) => {
  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        data-testid="modal"
        className="relative z-50"
        onClose={closeModal}
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-5 text-start align-middle shadow-xl transition-all dark:bg-dark-secondary dark:text-white">
                {title && (
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6"
                  >
                    {title}
                  </Dialog.Title>
                )}
                {description && <p className="mt-2">{description}</p>}

                <div>{children}</div>

                <div className="mt-8">
                  {actions?.length > 0 ? (
                    actions?.map((action, index) => (
                      <Button
                        key={index}
                        variant={action.variant}
                        onClick={() => {
                          action?.action && action?.action();
                          closeModal();
                        }}
                      >
                        {action.text}
                      </Button>
                    ))
                  ) : (
                    <Button onClick={closeModal}>حسناً</Button>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
