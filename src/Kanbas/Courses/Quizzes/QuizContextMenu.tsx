import React from 'react';

interface QuizContextMenuProps {
  onEdit: () => void;
  onDelete: () => void;
  onTogglePublish: () => void;
  isPublished: boolean;
}

const QuizContextMenu: React.FC<QuizContextMenuProps> = ({ onEdit, onDelete, onTogglePublish, isPublished }) => {
  return (
    <div className="dropdown-menu show position-absolute" style={{ top: '25px', right: '10px' }}>
      <button className="dropdown-item" onClick={onEdit}>
        Edit
      </button>
      <button className="dropdown-item" onClick={onDelete}>
        Delete
      </button>
      <button className="dropdown-item" onClick={onTogglePublish}>
        {isPublished ? 'Unpublish' : 'Publish'}
      </button>
    </div>
  );
};

export default QuizContextMenu;
