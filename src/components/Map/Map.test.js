import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import Map from './Map'
import { useMediaQuery } from '@material-ui/core'

jest.mock('@material-ui/core', () => {
  const original = jest.requireActual('@material-ui/core')
  return {
    ...original,
    useMediaQuery: jest.fn(),
  }
})

// Mock styling
jest.mock('./styles', () => () => ({
  mapContainer: 'mapContainer',
  markerContainer: 'markerContainer',
  paper: 'paper',
  typography: 'typography',
  pointer: 'pointer',
}))

// Mock GoogleMapReact
jest.mock('google-map-react', () => {
  return function MockGoogleMapReact(props) {
    return <div data-testid='google-map'>{props.children}</div>
  }
})

describe('Map component', () => {
  const setCoordinates = jest.fn()
  const setBounds = jest.fn()
  const setChildClicked = jest.fn()

  const coordinates = { lat: 40.7128, lng: -74.006 }
  const places = [
    {
      latitude: '40.7128',
      longitude: '-74.0060',
      name: 'Test Place',
      rating: '4.5',
    },
  ]

  test('renders the map and shows the location icon in mobile view', () => {
    // Simulate mobile view
    useMediaQuery.mockReturnValue(false)

    render(
      <Map
        setCoordinates={setCoordinates}
        setBounds={setBounds}
        coordinates={coordinates}
        places={places}
        setChildClicked={setChildClicked}
      />
    )

    // The map should be rendered
    expect(screen.getByTestId('google-map')).toBeInTheDocument()

    // In mobile view, we show the LocationOnOutlinedIcon instead of the place name
    // The icon is an SVG element with role="img"
    const icons = screen.getAllByRole('img', { hidden: true })
    expect(icons.length).toBeGreaterThan(0)
  })
})
