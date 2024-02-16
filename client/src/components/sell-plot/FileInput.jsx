import React, { useState } from 'react';

function FileInput({ onFileSelect }) {
    const [selectedFile, setSelectedFile] = useState(null);

    function handleFileInput(e) {
        const file = e.target.files[0];
        setSelectedFile(file);
        onFileSelect(file);
    }

    return (
        <div>
            <input type="file" onChange={handleFileInput} />
            {selectedFile && <p>{selectedFile.name}</p>}
        </div>
    );
}

export default FileInput;