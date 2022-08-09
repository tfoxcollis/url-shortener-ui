import React, { useState } from 'react';
import { postUrl } from '../../apiCalls';

const UrlForm = () => {
  const [ title, setTitle ] = useState("")
  const [ urlToShorten, setUrlToShorten ] = useState("")

  const handleSubmit = (e) => {
    const postBody = {
      long_url: urlToShorten,
      title: title
    }
    postUrl(postBody)
  }

  return (
    <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={urlToShorten}
          onChange={e => setUrlToShorten(e.target.value)}
        />

        <button onClick={(e) => handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
  )
}

export default UrlForm;
