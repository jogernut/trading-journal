import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useJournalStore = create(
  persist(
    (set) => ({
      dailyMarkups: {},
      trades: [],
      addDailyMarkup: (date, markup) =>
        set((state) => ({
          dailyMarkups: {
            ...state.dailyMarkups,
            [date]: markup
          }
        })),
      addTrade: (trade) =>
        set((state) => ({
          trades: [...state.trades, { ...trade, id: Date.now(), date: new Date().toISOString() }]
        })),
      removeTrade: (tradeId) =>
        set((state) => ({
          trades: state.trades.filter((trade) => trade.id !== tradeId)
        }))
    }),
    {
      name: 'trading-journal-storage'
    }
  )
)

export default useJournalStore
