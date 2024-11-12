import { useState } from 'react'
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import FileUpload from '../components/FileUpload'
import useJournalStore from '../store/journalStore'

function DailyMarkup() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [files, setFiles] = useState({
    news: null,
    fourHour: null,
    fifteenMin: null,
    fiveMin: null,
    video: null
  })

  const addDailyMarkup = useJournalStore((state) => state.addDailyMarkup)

  const handleFileUpload = (type) => (uploadedFiles) => {
    if (uploadedFiles.length > 0) {
      setFiles(prev => ({
        ...prev,
        [type]: {
          file: uploadedFiles[0],
          preview: URL.createObjectURL(uploadedFiles[0])
        }
      }))
    }
  }

  const handleSave = () => {
    addDailyMarkup(selectedDate.toISOString(), files)
    // Reset form
    setFiles({
      news: null,
      fourHour: null,
      fifteenMin: null,
      fiveMin: null,
      video: null
    })
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Daily Markup
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <DatePicker
              label="Select Date"
              value={selectedDate}
              onChange={setSelectedDate}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FileUpload
                onFileUpload={handleFileUpload('news')}
                accept={{ 'image/*': [] }}
                title="Upload News Events"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FileUpload
                onFileUpload={handleFileUpload('fourHour')}
                accept={{ 'image/*': [] }}
                title="Upload 4-Hour Chart"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FileUpload
                onFileUpload={handleFileUpload('fifteenMin')}
                accept={{ 'image/*': [] }}
                title="Upload 15-Minute Chart"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FileUpload
                onFileUpload={handleFileUpload('fiveMin')}
                accept={{ 'image/*': [] }}
                title="Upload 5-Minute Chart (Optional)"
              />
            </Grid>
            <Grid item xs={12}>
              <FileUpload
                onFileUpload={handleFileUpload('video')}
                accept={{ 'video/*': [] }}
                title="Upload End-of-Day Video (Optional)"
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSave}
            fullWidth
          >
            Save Daily Markup
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default DailyMarkup
