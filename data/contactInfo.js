import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/PhoneIphone'
import HouseIcon from '@mui/icons-material/House';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import DevIcon from '@mui/icons-material/LogoDev'

export const contactInfo = [
  { 
    id: "email",
    primary: "Email",
    secondary: "juliemevans17@gmail.com",
    link: "mailto:juliemevans17@gmail.com",
    icon: <MailIcon />
  },
  { 
    id: "phone",
    primary: "Phone",
    secondary: "(713) 447 - 0724",
    link: "tel:7134470724",
    icon: <PhoneIcon />
  },
  { 
    id: "address",
    primary: "Address", 
    secondary: "Kilgore, TX 75442",
    icon: <HouseIcon />
  },
  { 
    id: "linkedin",
    primary: "LinkedIn", 
    secondary: "https://linkedin.com/in/julie-evans-38144180",
    link: "https://linkedin.com/in/julie-evans-38144180",
    icon: <LinkedInIcon />
  },
  { 
    id: "github",
    primary: "GitHub", 
    secondary: "https://github.com/mailauki",
    link: "https://github.com/mailauki",
    icon: <GitHubIcon />
  },
  { 
    id: "blog",
    primary: "Blog", 
    secondary: "https://dev.to/mailauki",
    link: "https://dev.to/mailauki",
    icon: <DevIcon />
  }
]