import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: "Lauryn's Next-door Cottage",
  description: 'Midland Texas baker, creator, chef',
  keywords:
    'Lauryn, Lauren, Claxton, Gagliardi, Cakes, Cookies, Cupcakes, Catering, Chef, Cooking, Baking, Baked Goods',
}

export default Meta
