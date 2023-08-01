import { pipe, rehydrate, catchError } from 'overmind'
import { IAppContext } from '../index'
import { IMutation } from './types'

export const onInitializeOvermind = async () => {
  /**
   * Use effects and other actions onInitialize
   */
}
export const changePage = ({ state }: IAppContext, mutations: IMutation) => {
  rehydrate(state, mutations || [])
  switch (state.page) {
    case 'Index':
      // Do some additional logic
      break

    default:
      break
  }
}

export const updateBalance = ({ state }: IAppContext, balance: number) => {
  state.userBalance = balance
}

export const fetchJokes = pipe(
  async ({ state, effects }: IAppContext) => {
    const randomFacts = await effects.apiEffects.getRandomJoke()
    state.randomFacts = randomFacts
  },
  catchError(({ state }: IAppContext, error) => {
    state.error = error.message
  })
)
export const resetAllModals = ({ state }: IAppContext) => {
  state.isSignInModal = false
  state.isSignUpModalOpen = false
  state.isForgotModalOpen = false
}
export const activeSignInModal = (
  { state, actions }: IAppContext,
  value: boolean
) => {
  actions.resetAllModals()
  state.isSignInModal = value
}
export const activeSignUpModal = (
  { state, actions }: IAppContext,
  value: boolean
) => {
  actions.resetAllModals()
  state.isSignUpModalOpen = value
}
export const activeForgotModal = (
  { state, actions }: IAppContext,
  value: boolean
) => {
  actions.resetAllModals()
  state.isForgotModalOpen = value
}
