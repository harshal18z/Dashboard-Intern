import React, { useState } from 'react';
import '../contacts/news.css'

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // You can implement your file upload logic here
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // Add your file upload logic here, such as using FormData to send the file to a server
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}



const Contacts = () => {
  return (
    <>
    <div>
      <input placeholder='Create a Post' className='input-box'/>
    </div>
    <div className='form-fields'>
    <form action="/upload" method="post" enctype="multipart/form-data" className='upload-file'/>
        <label for="fileUpload" className='upload-file'>Upload a Image :</label>
        <input type="file" id="fileUpload" name="fileUpload" className='upload-file'/>
        <input type="submit" value="Upload File" className='upload-files'/>
        </div>
    </>
  )
}

export default Contacts