import {
    AlertDialogComponent,
    AlertDialogTrigger,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel,
    AlertDialogAction,
  } from './AlertDialogComponent'

const AlertDialogExample = () => {
  return (
    <div>
    <h1>AlertDialog Example</h1>
    <AlertDialogComponent >
      <AlertDialogTrigger asChild>
        <button className="Button">Delete account</button>
      </AlertDialogTrigger>
      <AlertDialogOverlay  />
      <AlertDialogContent >
        <AlertDialogTitle >Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription >
          This action cannot be undone. This will permanently delete your account and remove your data from our servers.
        </AlertDialogDescription>
        <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
          <AlertDialogCancel asChild>
            <button className="Button green">Cancel</button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <button className="Button red">Delete account</button>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialogComponent>
  </div>
  )
}

export default AlertDialogExample