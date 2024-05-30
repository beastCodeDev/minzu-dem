import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { modules } from '../config/index'; 
import { UploadDragger } from '~entities/uploadDragger';

const EditBio: React.FC = () => {
  const [text, setText] = useState<string>('');//в text хранится текст с Html тегами, вот пример:<h1>Hello world!</h1> 
  const quillRef = useRef<ReactQuill | null>(null);

  const handleChange = (value: string) => {
    setText(value);
  };

  return (
    <div className='flex justify-between items-center gap-5 px-auto m-10 '>
      <ReactQuill
        ref={quillRef}
        className='w-2/3'
        style={{height:'70vh'}}
        value={text}
        onChange={handleChange}
        modules={modules}
      />
      <UploadDragger />
    </div>
  );
}

export default EditBio;
