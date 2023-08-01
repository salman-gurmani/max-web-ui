export enum Pages {
  index = 'Index',
  about = 'About',
}
interface ChuckNorrisJoke {
  categories: string[]
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}

export interface State {
  page?: Pages
  userPoints: number
  userBalance: number
  randomFacts: ChuckNorrisJoke | null
  isSignInModal: boolean
  isSignUpModalOpen: boolean
  isForgotModalOpen: boolean
  error: any
}
export interface IMutation {
  method: string
  delimiter: string
  path: string
  args: any[]
  hasChangedValue: boolean
}
