import { useState } from 'react'
import { Box, Typography, Paper, Grid } from '@mui/material'
import { DateCalendar } from '@mui/x-date-pickers'
import useJournalStore from '../store/journalStore'

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const dailyMarkups = useJournalStore((state) => state.dailyMarkups)
  const trades = useJournalStore((state) => state.trades)

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Calendar
          </Typography>
          <DateCalendar
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Daily Summary
          </Typography>
          {/* Daily summary content will go here */}
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Dashboard
