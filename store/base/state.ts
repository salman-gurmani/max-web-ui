import { derived } from 'overmind'
import { State } from './types'

export const state: State = {
  // NextJS:
  page: undefined,
  userBalance: 500,
  isSignInModal: false,
  isSignUpModalOpen: false,
  isForgotModalOpen: false,
  userPoints: derived((state: State) => {
    const { userBalance } = state
    const nextLevelOffer = userBalance + ~~(userBalance * 0.1)

    return nextLevelOffer
  }),

  error: null,
  randomFacts: null,
}
