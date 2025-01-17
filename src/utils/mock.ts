import {NavigationItems} from "../types/structures.ts";

import inbox from '../assets/icons/inbox.tsx'
import contacts from '../assets/icons/contacts.tsx'
import broadcast from '../assets/icons/broadcast.tsx'
import dashboard from '../assets/icons/dashboard.tsx'
import automation from '../assets/icons/automation.tsx'

const navbarIcons: NavigationItems[] = [
    {
        label: 'Team Inbox',
        api_name: 'team_ibx',
        icon: inbox,
        route: '/team'
    },{
        label: 'Contacts',
        api_name: 'contacts',
        icon: contacts,
        route: '/contacts'
    },{
        label: 'Broadcast',
        api_name: 'broadcast',
        icon: broadcast,
        route: '/broadcast'
    },{
        label: 'Automation',
        api_name: 'automation',
        icon: automation,
        route: '/automation'
    },{
        label: 'Dashboard',
        api_name: 'dashboard',
        icon: dashboard,
        route: '/dashboard'
    }
]

export { navbarIcons }