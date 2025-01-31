import React from 'react'

const Card = ({ property }) => {
  return (
    <>
      <div className="rounded-lg shadow-lg overflow-hidden m-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
        <img
          src={property.image_url}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <p className="text-lg font-semibold mb-2">
            ${property.price.toLocaleString()} / mo
          </p>
          <h2 className="text-xl font-bold mb-2">Owner: {property.owner_name}</h2>
          <p className="text-gray-600">
            Location: {property.address.street}, {property.address.city}, {property.address.state}, {property.address.zipcode}
          </p>
          <p className="mt-2 text-gray-600">Area: {property.area_sq_ft} sqft</p>
        </div>
      </div>

    </>
  )
}

export default Card
