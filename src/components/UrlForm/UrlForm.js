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
          className="title-input"
          placeholder='Title...'
          name='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          type='text'
          className="url-input"
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={urlToShorten}
          onChange={e => setUrlToShorten(e.target.value)}
        />

        <button className="form-submit-btn" onClick={(e) => handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
  )
}

export default UrlForm;
