import React,{useEffect,useState,useRef} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const TextEditor = () => {
  const quillRef = useRef();
  const [content, setContent] = useState('');
  const handlechangequill = () => {
    const plainText = quillRef.current.getEditor().getText();
    setContent(plainText);
  };
  const savedocument=()=>{
    console.log(content);
  }
  return (
    <>
    <ReactQuill theme="snow" ref={quillRef} onChange={handlechangequill} />
    <button onClick={savedocument}>Save</button>
    </>
  )
}

export default TextEditor