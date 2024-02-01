// Write your tests here
import React from 'react'
import { render, screen } from '@testing-library/react'
import AppFunctional from './AppFunctional'

test('sanity', () => {
  expect(true).toBe(true)
})

// write 5 tests for the functional component visible texts in headings, buttons, links... render on the screen.
test('renders the heading', () => {
  render(<AppFunctional />)
  screen.getByRole('heading', { name: /welcome to the grid/i })
})
test('renders the functional nav link', () => {
  render(<AppFunctional />)
  screen.getByRole('link', { name: /functional/i })
})
test('renders the class-based nav link', () => {
  render(<AppFunctional />)
  screen.getByRole('link', { name: /class-based/i })
})
test('renders the reset button', () => {
  render(<AppFunctional />)
  screen.getByRole('button', { name: /reset/i })
})
test('renders the submit button', () => {
  render(<AppFunctional />)
  screen.getByRole('button', { name: /submit/i })
})

export default AppFunctional

