import Spline from '@splinetool/react-spline';
import './App.css'
import { Divider, SpeedDial, SpeedDialAction, Typography } from '@mui/material';
import ExperienceTimeline from './components/ExperienceTimeline';
import { ConnectWithoutContact, Email, GitHub, LinkedIn, Mail } from '@mui/icons-material';

export default function App() {

  const actions = [
    {icon: <GitHub/>, name: 'GitHub', tooltip: 'Message me on GitHub', operation: 'https://github.com/DKH707'},
    {icon: <LinkedIn/>, name: 'LinkedIn', tooltip: 'Message me on LinkedIn', operation: 'https://www.linkedin.com/in/dkh707/'},
    {icon: <Email/>, name: 'Email', tooltip: 'Send me an Email', operation: 'mailto:dhopkins@buildtechsys.com'}
  ]

  const handleAction = (oper) => {
    window.open(oper, "_blank", "noreferrer")
  }

  return <>
  <main className='bg-background text-text font-sans'>
    <h1>Derek Hopkins</h1>
    <div className='h-dvh'>
      <Spline scene="https://prod.spline.design/gInKA-TXha8ySRF3/scene.splinecode" />
    </div>
    <Divider className='bg-primary'></Divider>
    <div className='pt-4 grid sm:text-sm xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center justify-center'>
      <div>
        <h3>{'Experience'}</h3>
        <Divider className='bg-secondary'></Divider>
        <ExperienceTimeline font={'Mate SC'}></ExperienceTimeline>
      </div>
      <div>
        <h3>{'Education'}</h3>
        <Divider className='bg-secondary'></Divider>
        <Typography className='p-2' variant="h4" fontFamily={'Mate SC'}>B.S. Computer Science</Typography>
        <Divider className='bg-accent'></Divider>
        <Typography className='p-2' variant="h5" fontFamily={'Mate SC'}>Tarleton State University</Typography>

        <Typography className='p-2' variant="h4" fontFamily={'Mate SC'}>A.A.S Cybersecurity</Typography>
        <Divider className='bg-accent'></Divider>
        <Typography className='p-2' variant="h5" fontFamily={'Mate SC'}>Tarrant County College</Typography>
        </div>
    </div>
    <SpeedDial
      className='text-primary'
      ariaLabel="Contact"
      sx={{ position:'fixed', bottom: 12, right: 12, '& .MuiFab-primary': { backgroundColor: '#AD252A', color: 'white' } }}
      icon={<ConnectWithoutContact/>}>
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.tooltip}
              onClick={()=>handleAction(action.operation)}/>
          ))}
      </SpeedDial>
  </main>
  </>
}
