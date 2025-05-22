import { render, screen, waitFor } from '@testing-library/react'
import PricingSlice from './PricingSlice'

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(),
    })
  )
})

afterEach(() => {
  vi.resetAllMocks()
})

test('renders pricing plans fetched from API', async () => {
  render(<PricingSlice />)

  const pricingPlan = await waitFor(() => screen.getByText(/Hen Voyager/i))
  expect(pricingPlan).toBeInTheDocument()
})

test('renders without crashing if API fails', async () => {
    vi.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.reject(new Error('API failure'))
  )

  const { container } = render(<PricingSlice />)
  expect(container).toBeInTheDocument()
})