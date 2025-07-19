import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
      <script>
        {`alert("This is contact page of Facebook");`}
      </script>
      This is contact
    </div>
  )
}

export default contact

export const metadata = {
  title: "Contact Facebook",
  description: "If any query contact the headquater directly!",
};