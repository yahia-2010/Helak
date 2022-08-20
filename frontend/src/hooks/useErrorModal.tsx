import Modal from "@/components/Modal";
import React, { useEffect, useState } from "react";

const useErrorModal = (error: any): React.FC => {
  const [showErrorModal, setShowErrorModal] = useState(Boolean(error));
  useEffect(() => setShowErrorModal(Boolean(error)), [error]);
  const ErrorModal: React.FC = () => (
    <Modal
      title="حدث خطأ ما"
      description="حدث خطأ ما، يرجى إعادة المحاولة لاحقاً."
      isOpen={showErrorModal}
      closeModal={() => setShowErrorModal(false)}
    />
  );
  return ErrorModal;
};

export default useErrorModal;
