import React from 'react'
import TextEditor from '../Componets/TextEditor'
import { useParams } from 'react-router-dom';
const Workspace = ({update}) => {
  console.log(update)
  const { id } = useParams();
  console.log(id)
  return (
    <TextEditor update={update} id={id} />
  )
}

export default Workspace