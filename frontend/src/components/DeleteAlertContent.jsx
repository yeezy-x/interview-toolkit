import React from 'react';

const DeleteAlertContent = ({ content, onDelete, onCancel }) => {
  return (
    <div className="p-5" role="alertdialog" aria-modal="true">
      <p className="text-sm text-gray-800">{content}</p>

      <div className="flex justify-end gap-3 mt-6">
        <button
          type="button"
          className="btn-small bg-gray-200 hover:bg-gray-300 text-black"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="button"
          className="btn-small bg-red-500 hover:bg-red-600 text-white"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteAlertContent;
