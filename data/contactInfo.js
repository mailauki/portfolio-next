import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/PhoneIphone'
import PlaceIcon from '@mui/icons-material/Place'
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
    link: "https://www.google.com/maps/place/Kilgore,+TX+75662/",
    icon: <PlaceIcon />
  },
  { 
    id: "linkedin",
    primary: "LinkedIn", 
    secondary: "linkedin.com/in/julie-evans-381486180",
    link: "https://www.linkedin.com/in/julie-evans-381486180/",
    icon: <LinkedInIcon />
  },
  { 
    id: "github",
    primary: "GitHub", 
    secondary: "github.com/mailauki",
    link: "https://github.com/mailauki/",
    icon: <GitHubIcon />
  },
  { 
    id: "blog",
    primary: "Blog", 
    secondary: "dev.to/mailauki",
    link: "https://dev.to/mailauki/",
    icon: <DevIcon />
  }
]