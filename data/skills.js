import HtmlIcon from '@mui/icons-material/Html'
import CssIcon from '@mui/icons-material/Css'
// import JavascriptIcon from '@mui/icons-material/Javascript'
import CodeIcon from '@mui/icons-material/Code'
import JavaScriptIcon from '../icons/JavaScriptIcon'
import ReactIcon from '../icons/ReactIcon'
import RubyIcon from '../icons/RubyIcon'
import RailsIcon from '../icons/RailsIcon'
import ReduxIcon from '../icons/ReduxIcon'
import NextJsIcon from '../icons/NextJsIcon'
import PostgresIcon from '../icons/PostgresIcon'
import TypeScriptIcon from '../icons/TypeScriptIcon'

export const skills = {
  languages: [
    { 
      id: "html",
      primary: "HTML",
      icon: <HtmlIcon />
    },
    { 
      id: "css",
      primary: "CSS",
      icon: <CssIcon />
    },
    { 
      id: "javascript",
      primary: "JavaScript",
      icon: <JavaScriptIcon />
    },
    { 
      id: "ruby",
      primary: "Ruby",
      icon: <RubyIcon />
    },
    {
      id: "sql",
      primary: "SQL",
      icon: <CodeIcon />
    },
    { 
      id: "typescript",
      primary: "TypeScript",
      secondary: "Learning",
      icon: <TypeScriptIcon />
    }
  ],
  frameworks: [
    { 
      id: "reactjs",
      primary: "React JS",
      icon: <ReactIcon />
    },
    { 
      id: "ruby-on-rails",
      primary: "Ruby on Rails",
      icon: <RailsIcon />
    },
    {
      id: "active-record",
      primary: "Active Record",
      icon: <CodeIcon />
    },
    { 
      id: "nextjs",
      primary: "Next JS",
      icon: <NextJsIcon />
    }
  ],
  other: [
    { 
      id: "redux",
      primary: "Redux",
      icon: <ReduxIcon />
    },
    { 
      id: "postgres",
      primary: "Postgres",
      icon: <PostgresIcon />
    }
  ]
}