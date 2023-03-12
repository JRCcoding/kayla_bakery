import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
const containerStyle = {
  width: '400px',
  height: '400px',
}

const center = {
  lat: 31.94119030157523,
  lng: -102.25160531049097,
}
const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCwEaZBBxUXw8gwNvLivqUug48RjEGUDgg',
  })
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    ></GoogleMap>
  ) : (
    <></>
  )
}

export default GoogleMaps
