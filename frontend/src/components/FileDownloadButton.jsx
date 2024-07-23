import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '../styles/fileDownloadButton.css'; // Импорт на CSS файла

const FileDownloadButton = ({ fileName, fileUrl }) => {
  return (
    <a href={fileUrl} download className="file-download-button">
      <FontAwesomeIcon icon={faDownload} />
      Download {fileName}
    </a>
  );
};

export default FileDownloadButton;
