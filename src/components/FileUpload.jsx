import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Box, Typography, Paper } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

function FileUpload({ onFileUpload, accept, title }) {
  const onDrop = useCallback((acceptedFiles) => {
    onFileUpload(acceptedFiles)
  }, [onFileUpload])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    multiple: false
  })

  return (
    <Paper
      {...getRootProps()}
      sx={{
        p: 3,
        textAlign: 'center',
        cursor: 'pointer',
        bgcolor: isDragActive ? 'action.hover' : 'background.paper',
        border: '2px dashed',
        borderColor: isDragActive ? 'primary.main' : 'divider'
      }}
    >
      <input {...getInputProps()} />
      <CloudUploadIcon sx={{ fontSize: 48, mb: 2, color: 'primary.main' }} />
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Drag & drop a file here, or click to select
      </Typography>
    </Paper>
  )
}

export default FileUpload
