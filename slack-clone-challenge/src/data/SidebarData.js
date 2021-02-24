import MessageIcon from '@material-ui/icons/Message';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleIcon from '@material-ui/icons/People';
import AppsIcon from '@material-ui/icons/Apps';
import Looks5Icon from '@material-ui/icons/Looks5';
import TodayIcon from '@material-ui/icons/Today';
import CodeIcon from '@material-ui/icons/Code';
import { HourglassEmptyOutlined } from '@material-ui/icons';
import ExtensionIcon from '@material-ui/icons/Extension';

export const SidebarItemsData = [
    {
        icon: <MessageIcon />,
        text: "Thread"
    },
    {
        icon: <InboxIcon/>,
        text: "All DMs"
    },
    {
        icon: <DraftsIcon />,
        text: "Mentions & Reactions"
    },
    {
        icon: <BookmarkBorderIcon/>,
        text: "Save Items"
    },
    {
        icon: <PeopleIcon/>,
        text: "People & Groups"
    },
    {
        icon: <AppsIcon/>,
        text: "More"
    },

]

export const ChannelsData = [
    {
        icon: <Looks5Icon/>,
        text: "5"
    },
    {
        icon: <TodayIcon/>,
        text: "days"
    },
    {
        icon: <CodeIcon/>,
        text: "ReactJs"
    },  {
        icon: <ExtensionIcon/>,
        text: "Challenge!"
    },  {
        icon: <HourglassEmptyOutlined/>,
        text: "Day 3: Loading!"
    }
    
]