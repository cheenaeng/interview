'use client'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {
  const [query, setQuery] = useState('')

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Searching for:', query)
  }
  return (
    <div style={{ height: '100%', width: '100%' }} className={styles.main}>
      <div>
        <p>Search bar</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <input
            style={{
              height: '40px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              padding: '0 10px',
              marginRight: '10px'
            }}
            type='text'
            value={query}
            onChange={handleChange}
            placeholder='Search...'
          />
          <button type='submit'>Search</button>
        </div>
      </form>
    </div>
  )
}
