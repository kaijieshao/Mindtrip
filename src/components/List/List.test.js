import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import List from './List'
import { CircularProgress } from '@material-ui/core'

// Mock the useStyles hook to prevent style-related issues
jest.mock('./styles', () => () => ({
  container: 'container',
  loading: 'loading',
  formControl: 'formControl',
  list: 'list',
}))

// Mock PlaceDetails to avoid complexity
jest.mock('../PlaceDetails/PlaceDetails', () => {
  return function MockPlaceDetails({ place }) {
    return <div>{place.name}</div>
  }
})

describe('List component', () => {
  const setType = jest.fn()
  const setRating = jest.fn()

  const places = [{ name: 'Place One' }, { name: 'Place Two' }]

  test('renders loading spinner when isLoading is true', () => {
    render(
      <List
        places={[]}
        childClicked={null}
        isLoading={true}
        type='restaurants'
        setType={setType}
        rating={0}
        setRating={setRating}
      />
    )

    // The loading spinner
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  test('renders the filter controls and place list when not loading', () => {
    render(
      <List
        places={places}
        childClicked={null}
        isLoading={false}
        type='restaurants'
        setType={setType}
        rating={0}
        setRating={setRating}
      />
    )

    // Check that Type and Rating select controls are rendered
    expect(screen.getByLabelText(/type/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/rating/i)).toBeInTheDocument()

    // Check that places are rendered via mocked PlaceDetails
    expect(screen.getByText('Place One')).toBeInTheDocument()
    expect(screen.getByText('Place Two')).toBeInTheDocument()
  })
})
